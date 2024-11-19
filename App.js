// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ChatRooms from './components/ChatRooms';
import Ideas from './components/Ideas';
import Course1 from './components/Course1';
import Course2 from './components/Course2';
import Course3 from './components/Course3';
import { auth } from './firebase'; // 引入已初始化的 Firebase 配置

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <div className="App">
        <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login handleLogin={handleLogin} />} />
          <Route path="/chatrooms" element={isAuthenticated ? <ChatRooms /> : <Login handleLogin={handleLogin} />} />
          <Route path="/ideas" element={isAuthenticated ? <Ideas /> : <Login handleLogin={handleLogin} />} />
          <Route path="/course1" element={isAuthenticated ? <Course1 /> : <Login handleLogin={handleLogin} />} />
          <Route path="/course2" element={isAuthenticated ? <Course2 /> : <Login handleLogin={handleLogin} />} />
          <Route path="/course3" element={isAuthenticated ? <Course3 /> : <Login handleLogin={handleLogin} />} />
          <Route path="/" element={<Dashboard />} /> {/* 設置主頁為 Dashboard */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
