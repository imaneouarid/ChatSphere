// chatsphere-server/controllers/chatController.js
const User = require('../models/user');
const Message = require('../models/message');

// Controller to handle user joining the chat
exports.joinChat = async (req, res) => {
  try {
    // Extract data from the request body (e.g., pseudonym)
    const { pseudonym } = req.body;

    // Create a new user instance and save to the database
    const user = new User({ pseudonym });
    await user.save();

    // Send a response with the user data or any other necessary information
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error joining chat:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to handle sending a chat message
exports.sendMessage = async (req, res) => {
  try {
    // Extract data from the request body (e.g., content, pseudonym)
    const { content, pseudonym } = req.body;

    // Find the user based on the pseudonym (assuming the pseudonym is unique)
    const user = await User.findOne({ pseudonym });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create a new message instance and save to the database
    const message = new Message({ content, author: pseudonym });
    await message.save();

    // Send a response with the message data or any other necessary information
    res.status(200).json({ message });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
