// Home.js
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // 如果要使用動畫效果，需要安裝 framer-motion
import './Home.css';

const Home = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "🌟",
      title: "全面課程內容",
      description: "涵蓋編程、設計、數據科學等熱門領域"
    },
    {
      icon: "👩‍🏫",
      title: "專業導師團隊",
      description: "提供個性化的學習指導和支援"
    },
    {
      icon: "🌍",
      title: "互動學習社區",
      description: "與全球學習者交流想法和經驗"
    },
    {
      icon: "💼",
      title: "實踐項目導向",
      description: "將知識應用於實際問題解決"
    }
  ];

  const handleLearnMore = () => {
    navigate(isAuthenticated ? '/dashboard' : '/login');
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>啟航你的學習之旅</h1>
          <p className="hero-subtitle">
            專業的線上學習平台，為您打造個人化的學習體驗
          </p>
          <div className="hero-buttons">
            <button 
              className="primary-button"
              onClick={handleLearnMore}
            >
              {isAuthenticated ? '進入學習' : '立即開始'}
            </button>
            <Link to="/about" className="secondary-button">
              了解更多
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>平台特色</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-item">
          <h3>1000+</h3>
          <p>活躍學習者</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>專業課程</p>
        </div>
        <div className="stat-item">
          <h3>95%</h3>
          <p>學員滿意度</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>準備好開始您的學習之旅了嗎？</h2>
        <p>加入我們的學習社群，與志同道合的學習者一起成長</p>
        <button 
          className="cta-button"
          onClick={handleLearnMore}
        >
          {isAuthenticated ? '繼續學習' : '立即註冊'}
        </button>
      </section>
    </div>
  );
}

export default Home;