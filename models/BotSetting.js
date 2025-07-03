const mongoose = require('mongoose');

const botSettingSchema = new mongoose.Schema({
  name: String,
  botUrl: String,
  weatherToken: String
});

// Static method to always return the first (and only) document
botSettingSchema.statics.getSingleton = async function () {
  let setting = await this.findOne();
  if (!setting) {
    setting = await this.create({
      name: '',
      botUrl: '',
      weatherToken: ''
    });
  }
  return setting;
};

module.exports = mongoose.model('BotSetting', botSettingSchema);
