import React from 'react';

const Reviews = () => {
  const reviews = [
    { id: 1, name: 'Иван', text: 'Отличный зал, все новое и чистое!' },
    { id: 2, name: 'Елена', text: 'Люблю групповые занятия, особенно йогу.' },
    { id: 3, name: 'Андрей', text: 'Персональный тренер помог похудеть.' },
  ];

  return (
    <section className="reviews">
      <h2>Отзывы</h2>
      <div className="reviews-list">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <p>{review.text}</p>
            <strong>— {review.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;