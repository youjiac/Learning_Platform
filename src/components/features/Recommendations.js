import React from 'react';
import './Recommendations.css';

function Recommendations() {
  const recommendations = [
    { title: '如何高效學習React', description: '深入了解React的核心概念和最佳實踐。' },
    { title: '構建PWA的最佳實踐', description: '學習如何構建高效的漸進式Web應用。' },
  ];

  // 示例推薦算法（可替換為實際推薦算法）
  const userRecommendations = recommendations;

  return (
    <section id="recommendations">
      <h2>推薦內容</h2>
      <div className="recommendation-cards">
        {userRecommendations.map((rec, index) => (
          <div key={index} className="card">
            <h3>{rec.title}</h3>
            <p>{rec.description}</p>
            <button>查看詳情</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recommendations;
