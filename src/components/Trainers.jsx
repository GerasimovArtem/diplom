import React from 'react';

const Trainers = () => {
  const trainers = [
    { id: 1, name: 'Александр', specialty: 'Бодибилдинг', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Мария', specialty: 'Йога и пилатес', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Даниил', specialty: 'Кроссфит'},
  ];

  return (
    <section className="trainers">
      <h2>Наши тренеры</h2>
      <div className="trainers-list">
        {trainers.map(trainer => (
          <div key={trainer.id} className="trainer-card">
            <img src={trainer.image} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <p>{trainer.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;