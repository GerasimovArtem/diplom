// src/components/AuthModal.jsx
import React, { useState } from 'react';
import api from '../api/api';

const AuthModal = ({ isOpen, onClose, setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        // Вход
        const response = await api.post('/auth/tokens', {
          email: formData.email,
          password: formData.password,
        });

        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        // ← КРИТИЧЕСКИ ВАЖНО: обновляем состояние в App.jsx
        if (setIsAuthenticated) {
          setIsAuthenticated(true);
        }

        alert('Вход выполнен!');
      } else {
        // Регистрация
        await api.post('/auth/register', {
          email: formData.email,
          passwordHash: formData.password, // как требует твой API
        });
        alert('Регистрация успешна!');
      }

      onClose();
    } catch (err) {
      console.error('Ошибка API:', err);
      let message = 'Не удалось подключиться к серверу. Убедитесь, что бэкенд запущен.';
      if (err.response) {
        message =
          err.response.data?.message ||
          err.response.data?.error ||
          `Ошибка ${err.response.status}`;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>

        {error && <div className="form-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
              minLength="6"
              required
            />
          </div>
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Загрузка...' : isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        <p className="modal-toggle">
          {isLogin ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
            }}
            className="link-button"
          >
            {isLogin ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;