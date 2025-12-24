// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Trainers from '../components/Trainers';
import Reviews from '../components/Reviews';
import BookingForm from '../components/BookingForm';

const Home = ({ isAuthenticated }) => {
  return (
    <div>
      <Hero />
      <Services />
      <Pricing />
      <Trainers />
      <Reviews />
      <BookingForm isAuthenticated={isAuthenticated} />
    </div>
  );
};

export default Home;