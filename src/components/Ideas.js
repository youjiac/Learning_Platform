// src/components/Ideas.js
import React, { useState } from 'react';
import './Ideas.css';

function Ideas() {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState('');

  const handleAddIdea = () => {
    if (newIdea.trim()) {
      setIdeas([...ideas, newIdea]);
      setNewIdea('');
    }
  };

  return (
    <div className="ideas">
      <h2>想法池</h2>
      <input
        type="text"
        value={newIdea}
        onChange={(e) => setNewIdea(e.target.value)}
        placeholder="輸入你的想法"
      />
      <button onClick={handleAddIdea}>添加想法</button>
      <ul>
        {ideas.map((idea, index) => (
          <li key={index}>{idea}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ideas;
