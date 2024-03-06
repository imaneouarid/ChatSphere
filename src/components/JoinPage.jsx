// chatsphere-client/src/JoinPage.js
import React, { useState } from 'react';

const JoinPage = ({ onJoinChat }) => {
  const [pseudonym, setPseudonym] = useState('');

  const handleJoinChat = () => {
    if (pseudonym.trim() !== '') {
      onJoinChat(pseudonym);
    }
  };

  return (
    <div>
      <h1>Join Chat</h1>
      <label htmlFor="pseudonym">Choose a Pseudonym:</label>
      <input
        type="text"
        id="pseudonym"
        value={pseudonym}
        onChange={(e) => setPseudonym(e.target.value)}
      />
      <button onClick={handleJoinChat}>Join Chat</button>
    </div>
  );
};

export default JoinPage;
