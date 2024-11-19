import React from 'react';
import './Competitions.css'; // 添加樣式

function Competitions() {
  const competitions = [
    { title: '全國兒童程式設計大賽 - 2024年12月', link: '#' },
    { title: 'Python挑戰賽 - 2024年11月', link: '#' },
    { title: 'C++高手賽 - 2024年10月', link: '#' }
  ];

  return (
    <div>
      <ul>
        {competitions.map((competition, index) => (
          <li key={index}>
            <a href={competition.link}>{competition.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Competitions;
