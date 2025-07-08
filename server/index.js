const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/users');
const botSettingsRoutes = require('./routes/botSettings');

const app = express();
// ✅ ALLOW specific origin (your frontend domain)
app.use(cors({
  origin: 'https://telegram-bot-yxhs.onrender.com',
  credentials: true
}));
app.use(express.json());

// ✅ Connect to "weather" database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'weather' // 👈 Specify the DB name here
}).then(() => {
  console.log('✅ MongoDB connected to "weather" database');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
});

app.use('/api/users', userRoutes);
app.use('/api/bot-settings', botSettingsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
