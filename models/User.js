const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  chatId: { type: Number, required: true, unique: true },
  username: String,
  fullName: String,
  subscribed: { type: Boolean, default: false },
  blocked: { type: Boolean, default: false },
  location: {
    name: String
  }
});

module.exports = mongoose.model('User', userSchema);
