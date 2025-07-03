const express = require('express');
const router = express.Router();
const BotSetting = require('../../models/BotSetting');

router.get('/', async (req, res) => {
    try {
      const setting = await BotSetting.getSingleton();
      console.log('Fetched setting:', setting);  // Debug log
      res.json(setting);
    } catch (err) {
      console.error(err);  // Log error
      res.status(500).json({ error: 'Failed to load bot setting' });
    }
  });
  

// Update the bot setting
router.post('/', async (req, res) => {
  try {
    const setting = await BotSetting.getSingleton();
    setting.name = req.body.name || setting.name;
    setting.botUrl = req.body.botUrl || setting.botUrl;
    setting.weatherToken = req.body.weatherToken || setting.weatherToken;
    await setting.save();
    res.json(setting);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update bot setting' });
  }
});

module.exports = router;
