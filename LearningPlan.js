// src/components/LearningPlan.js
import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import LearningPlanCard from './LearningPlanCard';
import { collection, query, where, onSnapshot, addDoc } from 'firebase/firestore';
import './LearningPlan.css';

function LearningPlan() {
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState('');

  useEffect(() => {
    if (auth.currentUser) {
      const q = query(collection(db, 'plans'), where('userId', '==', auth.currentUser.uid));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setPlans(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
      return () => unsubscribe();
    }
  }, [auth.currentUser]);

  const addPlan = async (e) => {
    e.preventDefault();
    if (newPlan) {
      await addDoc(collection(db, 'plans'), {
        userId: auth.currentUser.uid,
        task: newPlan,
        completed: false,
      });
      setNewPlan('');
    }
  };

  return (
    <section id="learning-plan">
      <h2>學習計劃</h2>
      <form onSubmit={addPlan}>
        <input
          type="text"
          value={newPlan}
          onChange={(e) => setNewPlan(e.target.value)}
          placeholder="添加新計劃"
        />
        <button type="submit">添加</button>
      </form>
      <div className="plan-cards">
        {plans.map(plan => (
          <LearningPlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}

export default LearningPlan;
