// src/components/Header.js
import React, { useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({ isAuthenticated, handleLogout }) {
  useEffect(() => {
    const header = document.querySelector('.App-header');
    const linesContainer = document.createElement('div');
    linesContainer.classList.add('lines');
    header.appendChild(linesContainer);

    function createLine(x1, y1, x2, y2) {
      const line = document.createElement('div');
      line.classList.add('line');
      const length = Math.hypot(x2 - x1, y2 - y1);
      const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
      line.style.width = `${length * 2}px`; /* 調整為兩倍的長度 */
      line.style.setProperty('--angle', `${angle}deg`);
      line.style.left = `${x1}px`;
      line.style.top = `${y1}px`;
      linesContainer.appendChild(line);

      setTimeout(() => {
        linesContainer.removeChild(line);
      }, 2000);
    }

    function handleMouseMove(event) {
      const x = event.clientX;
      const y = event.clientY;

      const xOffset = 50;
      const yOffset = 50;

      createLine(x, y, x + Math.random() * xOffset, y + Math.random() * yOffset);
      createLine(x, y, x - Math.random() * xOffset, y - Math.random() * yOffset);
    }

    header.addEventListener('mousemove', handleMouseMove);

    return () => header.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className="App-header">
      <h1>學習平台</h1>
      <nav>
        <ul>
          <li><Link to="/">主頁</Link></li> {/* 主頁導航鏈接 */}
          {isAuthenticated && (
            <>
              <li className="dropdown">
                <span>課程</span>
                <ul className="dropdown-content">
                  <li><Link to="/Course1">Scratch</Link></li>
                  <li><Link to="/Course2">Python</Link></li>
                  <li><Link to="/Course3">C++</Link></li>
                </ul>
              </li>
              <li><Link to="/chatrooms">聊天室</Link></li>
              <li><Link to="/ideas">想法池</Link></li>
              <li><button className="logout-button" onClick={handleLogout}>登出</button></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
