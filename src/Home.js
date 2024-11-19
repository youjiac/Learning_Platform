import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // 引入 CSS 文件

const Home = () => {
  return (
    <div className="home">
      <h1>歡迎來到學習平台</h1>
      <p>這裡是我們平台的介紹內容...</p>
      <div className="auth-buttons">
        <Link to="/login">
          <button className="login-button">登入</button>
        </Link>
        <Link to="/register">
          <button className="register-button">註冊</button>  {/* 如果有單獨的註冊頁面 */}
        </Link>
      </div>
    </div>
  );
}

export default Home;
