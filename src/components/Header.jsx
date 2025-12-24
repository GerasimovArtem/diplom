// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';

const Header = ({ isAuthenticated, onLogout, setIsAuthenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <h1>Сталь</h1>
        <nav className={menuOpen ? 'nav-open' : ''}>
          <Link to="/">Главная</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/pricing">Цены</Link>
          <Link to="/trainers">Тренеры</Link>
          <Link to="/contact">Контакты</Link>
        </nav>
        {isAuthenticated ? (
          <button className="auth-btn" onClick={onLogout}>
            Выйти
          </button>
        ) : (
          <button className="auth-btn" onClick={() => setIsModalOpen(true)}>
            Войти
          </button>
        )}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </header>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setIsAuthenticated={setIsAuthenticated}
      />
    </>
  );
};

export default Header;