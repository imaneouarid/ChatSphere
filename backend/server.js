//app.js
const express= require("express")
require('dotenv').config();
const mongoose = require('mongoose'); 
const cors = require('cors');
require('dotenv').config();
const http = require('http');
const { Server } = require('socket.io');
const userRoutes = require('./routes/userRoute'); // Add this line
const chatRoutes = require('./routes/chatRoute');
const userController = require('./controllers/userController');
const messageController = require('./controllers/chatController');

const app=express()
app.use(express.json());
app.use(cors("*"));

const server = http.createServer(app);
const io = new Server(server);

// Define routes for handling user actions
app.use('/api/user', userRoutes); // Add this line

// Define routes for handling chat actions
app.use('/api/chat', chatRoutes);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle user connection
  const user = userController.connectUser(socket);

  // Handle chat messages
  socket.on('chat message', (msg) => {
    messageController.handleMessage(msg, user, io);
  });

  // Handle disconnect event
  socket.on('disconnect', () => {
    userController.disconnectUser(user);
  });
});






mongoose.connect(process.env.URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Not connected to the database " + err);
  });


//json middleware

app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT)
     
})
