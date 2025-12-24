import React from 'react';

const Pricing = () => {
  const plans = [
    { id: 1, name: 'Старт', price: '1500 руб/мес', desc: 'Тренажерный зал' },
    { id: 2, name: 'Прогресс', price: '3000 руб/мес', desc: 'Зал + 2 тренировки' },
    { id: 3, name: 'Профи', price: '5000 руб/мес', desc: 'Все услуги' },
  ];

  return (
    <section className="pricing">
      <h2>Абонементы</h2>
      <div className="pricing-list">
        {plans.map(plan => (
          <div key={plan.id} className="pricing-card">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <p>{plan.desc}</p>
            <button>Выбрать</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;