// chatsphere-server/models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  pseudonym: { type: String, required: true, unique: true },
  // Add any additional fields you may need
});

const User = mongoose.model('User', userSchema);

module.exports = User;
