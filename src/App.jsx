// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import TrainersPage from './pages/TrainersPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app">
        <Header
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
          setIsAuthenticated={setIsAuthenticated}
        />
        <Routes>
          <Route
            path="/"
            element={<Home isAuthenticated={isAuthenticated} />}
          />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;