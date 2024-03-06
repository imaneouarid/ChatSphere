// chatsphere-client/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { io } from 'socket.io-client'; // Import io from socket.io-client
import HomePage from './HomePage';
import JoinPage from './JoinPage';

const socket = io('http://localhost:3000');

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pseudonym, setPseudonym] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    if (currentPage === 'chat' && pseudonym.trim() !== '') {
      // Emit an event to the server to join the chat
      socket.emit('join chat', { pseudonym });
    }
  }, [currentPage, pseudonym]);

  useEffect(() => {
    // Listen for incoming chat messages
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  const handleJoinChat = () => {
    setCurrentPage('join');
  };

  const handleJoinChatWithPseudonym = (selectedPseudonym) => {
    setPseudonym(selectedPseudonym);
    setCurrentPage('chat');
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      // Emit a chat message to the server
      socket.emit('chat message', { content: inputMessage });
      // Clear the input field
      setInputMessage('');
    }
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage onJoinChat={handleJoinChat} />}
      {currentPage === 'join' && <JoinPage onJoinChat={handleJoinChatWithPseudonym} />}
      {currentPage === 'chat' && (
        <div className="chat-container">
          <div className="messages-container">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <span className="message-author">{msg.author}:</span> {msg.content}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

