import React from 'react';
import './News.css'; // 添加樣式

function News() {
  const news = [
    { title: '學習程式設計的重要性', link: '#' },
    { title: '如何讓兒童愛上編程', link: '#' },
    { title: '最新的Scratch 3.0更新', link: '#' }
  ];

  return (
    <div>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.link}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
