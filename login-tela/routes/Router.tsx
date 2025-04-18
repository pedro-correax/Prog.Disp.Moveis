import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    if (username === 'Aderbal' && password === '123456') {
      setIsAuthenticated(true);
      navigate('/dashboard');
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Login onLogin={handleLogin} />}
      />
    </Routes>
  );
};

export default Router;
