import React from 'react';

const Services = () => {
  const services = [
    { id: 1, title: 'Тренажерный зал', desc: 'Современное оборудование' },
    { id: 2, title: 'Персональные тренировки', desc: 'Индивидуальный подход' },
    { id: 3, title: 'Групповые занятия', desc: 'Йога, кроссфит, пилатес' },
  ];

  return (
    <section className="services">
      <h2>Наши услуги</h2>
      <div className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;