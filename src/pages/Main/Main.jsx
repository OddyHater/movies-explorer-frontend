import './main.css';

import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Technology from '../../components/Technology/Technology';
import Student from '../../components/Student/Student';

const Main = () => {
  return (
    <>
      <Hero />
      <About />
      <Technology />
      <Student />
    </>
  );
};

export default Main;