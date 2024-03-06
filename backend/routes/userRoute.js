// chatsphere-server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for handling user-related actions
router.post('/join', userController.joinUser);

module.exports = router;
