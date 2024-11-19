// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase'; // 引入已初始化的 Firebase 應用

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError('');
      handleLogin();  // 更新身份驗證狀態
      navigate('/dashboard');  // 導航到Dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignupClick = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      setMessage('註冊成功！請檢查你的電子郵件以驗證你的帳戶。');
      setError('');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('該電子郵件地址已被使用。');
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div>
      <h2>登錄或註冊</h2>
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleLoginClick}>登錄</button>
        <button onClick={handleSignupClick}>註冊</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
