import React from 'react';
import './InteractiveExercises.css';

function InteractiveExercises() {
  const exercises = [
    { question: 'React hooks實踐', type: 'multiple-choice' },
    { question: 'PWA離線支持測試', type: 'drag-and-drop' },
  ];

  // 示例練習類型和即時反饋（可替換為實際練習）
  const renderExercise = (exercise) => {
    if (exercise.type === 'multiple-choice') {
      return (
        <div className="card">
          <h3>{exercise.question}</h3>
          <button>開始練習</button>
        </div>
      );
    } else if (exercise.type === 'drag-and-drop') {
      return (
        <div className="card">
          <h3>{exercise.question}</h3>
          <button>開始練習</button>
        </div>
      );
    }
  };

  return (
    <section id="interactive-exercises">
      <h2>互動學習</h2>
      <div className="exercise-cards">
        {exercises.map((exercise, index) => (
          <React.Fragment key={index}>
            {renderExercise(exercise)}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default InteractiveExercises;
