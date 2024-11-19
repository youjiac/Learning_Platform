import React from 'react';
import './LearningPlanCard.css';

function LearningPlanCard({ plan }) {
  return (
    <div className="card">
      <h3>{plan.task}</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${plan.completed ? 100 : 0}%` }}></div>
      </div>
    </div>
  );
}

export default LearningPlanCard;
