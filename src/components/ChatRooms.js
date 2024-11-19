// src/components/ChatRooms.js
import React from 'react';
import './ChatRooms.css';

function ChatRooms() {
  const chatRooms = [
    { name: '課程1 聊天室' },
    { name: '課程2 聊天室' },
    { name: '課程3 聊天室' },
    // 添加更多聊天室
  ];

  return (
    <div className="chatrooms">
      <h2>聊天室</h2>
      <ul>
        {chatRooms.map((room, index) => (
          <li key={index}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChatRooms;
