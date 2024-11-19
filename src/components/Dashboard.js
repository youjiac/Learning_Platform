// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';
import Competitions from './Competitions';
import News from './News';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>歡迎回來！</h1>

      <section className="intro">
        <h2>平台介紹</h2>
        <p>歡迎來到我們的學習平台！我們致力於提供兒童友好的程式設計課程，從 Scratch 到 Python，再到 C++，幫助孩子們從基礎到高級逐步學習程式設計。</p>
      </section>

      <section className="competitions">
        <h2>最新競賽</h2>
        <Competitions />
      </section>

      <section className="news">
        <h2>最新動態</h2>
        <News />
      </section>
    </div>
  );
}

export default Dashboard;
