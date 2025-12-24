// src/components/BookingForm.jsx
import React, { useState } from 'react';

const BookingForm = ({ isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert('Войдите или зарегистрируйтесь, чтобы записаться на тренировку.');
      return;
    }

    // ✅ Просто показываем уведомление — без отправки на сервер
    alert('Вы успешно записаны на тренировку!');
    
    // Опционально: очищаем форму
    setFormData({ name: '', phone: '', service: '', date: '' });
  };

  return (
    <section className="booking-form">
      <h2>Записаться на тренировку</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Телефон"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Выберите услугу</option>
          <option value="зал">Тренажерный зал</option>
          <option value="персонал">Персональная тренировка</option>
          <option value="группа">Групповое занятие</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Записаться</button>
      </form>
    </section>
  );
};

export default BookingForm;