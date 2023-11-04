import './main.css';

import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Technology from '../../components/Technology/Technology';
import Student from '../../components/Student/Student';
import Portfolio from '../../components/Portfolio/Portfolio';
import Footer from '../../components/Footer/Footer';

const Main = () => {
  return (
    <div className='main'>
      <Hero />
      <About />
      <Technology />
      <Student />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Main;