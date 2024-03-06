// chatsphere-server/models/message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  // Add any additional fields you may need
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;

