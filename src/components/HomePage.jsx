// chatsphere-client/src/HomePage.js
import React from 'react';

const HomePage = ({ onJoinChat }) => {
  return (
    <div>
      <h1>Welcome to ChatSphere!</h1>
      <p>Join the chat to start communicating in real-time.</p>
      <button onClick={onJoinChat}>Join Chat</button>
    </div>
  );
};

export default HomePage;
