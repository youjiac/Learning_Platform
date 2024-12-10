// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/common/PrivateRoute';
import Layout from './components/layout/Layout';
import * as ROUTES from './constants/routes';

// Lazy loading for pages
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
// ... 其他頁面

function App() {
  return (
    <AuthProvider>
      <Router basename="/Learning_Platform">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.LOGIN} element={<Login />} />
              <Route 
                path={ROUTES.DASHBOARD} 
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } 
              />
              {/* ... 其他路由 */}
            </Routes>
          </Layout>
        </React.Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;