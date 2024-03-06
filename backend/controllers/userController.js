// chatsphere-server/controllers/userController.js
const User = require('../models/user');

// Controller to handle user joining the chat
exports.joinUser = async (req, res) => {
  try {
    // Extract data from the request body (e.g., pseudonym)
    const { pseudonym } = req.body;

    // Check if the pseudonym already exists
    const existingUser = await User.findOne({ pseudonym });

    if (existingUser) {
      return res.status(400).json({ error: 'Pseudonym already in use' });
    }

    // Create a new user instance and save to the database
    const user = new User({ pseudonym });
    await user.save();

    // Send a response with the user data or any other necessary information
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error joining user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
