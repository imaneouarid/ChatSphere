// chatsphere-server/routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Define routes for handling chat-related actions
router.post('/join', chatController.joinChat);
router.post('/message', chatController.sendMessage);

module.exports = router;
