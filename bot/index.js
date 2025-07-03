const { Telegraf } = require('telegraf');
const mongoose = require('mongoose');
const cron = require('node-cron');
require('dotenv').config();

const User = require('../models/User');
const BotSetting = require('../models/BotSetting');
const { getWeatherByCoordsFactory } = require('./services/weatherService');
const { getQuoteByWeather } = require('./utils/quotes');

const pendingName = new Map();
const pendingLocation = new Map();

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB connected');

    const setting = await BotSetting.getSingleton();

    if (!setting.botUrl || !setting.weatherToken) {
      throw new Error('❌ Bot or Weather token missing in DB.');
    }

    const bot = new Telegraf(setting.botUrl);
    const getWeatherByCoords = getWeatherByCoordsFactory(setting.weatherToken);

    // /start
    bot.start(async (ctx) => {
      const { id, username } = ctx.chat;

      await User.findOneAndUpdate(
        { chatId: id },
        { chatId: id, username, blocked: false },
        { upsert: true, new: true }
      );

      await ctx.reply('👋 Welcome! Use /subscribe to start getting weather updates.');
    });

    // /subscribe
    bot.command('subscribe', async (ctx) => {
      const user = await User.findOne({ chatId: ctx.chat.id });
      if (user?.blocked) return ctx.reply('🚫 You are blocked from using this bot.');

      await User.findOneAndUpdate(
        { chatId: ctx.chat.id },
        { subscribed: true },
        { upsert: true }
      );

      ctx.reply('✅ You are subscribed to weather updates!');
      ctx.reply('📝 Please enter your full name:');
      pendingName.set(ctx.chat.id, true);
    });

    // /unsubscribe
    bot.command('unsubscribe', async (ctx) => {
      const user = await User.findOne({ chatId: ctx.chat.id });

      if (!user) return ctx.reply('❌ You are not subscribed.');
      if (user.blocked) return ctx.reply('🚫 You are blocked from using this bot.');

      await User.findOneAndUpdate(
        { chatId: ctx.chat.id },
        { subscribed: false }
      );

      ctx.reply('❌ You have been unsubscribed from weather updates.');
    });

    // /location
    bot.command('location', async (ctx) => {
      ctx.reply("📍 Please type your city or location name (e.g., *Delhi*, *Mumbai*, *New York*):", {
        parse_mode: 'Markdown'
      });
      pendingLocation.set(ctx.chat.id, true);
    });

    // /updateLocation
    bot.command('updateLocation', async (ctx) => {
      const user = await User.findOne({ chatId: ctx.chat.id });
      if (!user || user.blocked) {
        return ctx.reply('🚫 You are not allowed to update location.');
      }

      ctx.reply("🔁 Please type your new city name to update location.");
      pendingLocation.set(ctx.chat.id, true);
    });

    // Handle text inputs (Name or Location)
    bot.on('text', async (ctx) => {
      const chatId = ctx.chat.id;
      const text = ctx.message.text.trim();

      if (pendingName.has(chatId)) {
        await User.findOneAndUpdate({ chatId }, { fullName: text });
        pendingName.delete(chatId);
        ctx.reply(`✅ Thanks, *${text}*!`, { parse_mode: 'Markdown' });

        ctx.reply("📍 Now please type your city or location name (e.g., *Delhi*, *Mumbai*):", {
          parse_mode: 'Markdown'
        });
        pendingLocation.set(chatId, true);
        return;
      }

      if (pendingLocation.has(chatId)) {
        await User.findOneAndUpdate({ chatId }, { location: { name: text } });

        const weather = await getWeatherByCoords(text);
        ctx.reply(`✅ Location saved as *${text}*\n\n${weather.text}`, {
          parse_mode: 'Markdown'
        });
        pendingLocation.delete(chatId);
        return;
      }
    });

    // CRON job — every 5 minutes
    cron.schedule('0 */5 * * * *', async () => {
      const users = await User.find({ subscribed: true, blocked: false });

      for (const user of users) {
        if (user.location?.name) {
          const weatherData = await getWeatherByCoords(user.location.name);
          const quote = getQuoteByWeather(weatherData.main);

          const message = `🌦️ *Weather Update*\n\n${weatherData.text}\n\n💡 ${quote}\n\n📍 To change location: /updateLocation\n❌ To unsubscribe: /unsubscribe`;

          await bot.telegram.sendMessage(user.chatId, message, {
            parse_mode: 'Markdown'
          });
        }
      }
    });

    bot.launch();
    console.log('🤖 Bot is running...');
  } catch (err) {
    console.error('❌ Error launching bot:', err.message);
  }
})();
