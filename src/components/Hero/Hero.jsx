import './hero.css';

import Wrapper from '../Wrapper/Wrapper';
import React from 'react';

const Hero = () => {
  return (
    <section className='hero'>
      <Wrapper modifier={'hero'}>
        <div className="hero__text-container">
          <h1 className="hero__title">123</h1>
          <p className="hero__subtitle">123</p>
          <a href="/" className="hero__link">Узнать больше</a>
        </div>
        <img src="" alt="" className="hero__image" />
      </Wrapper>
    </section>
  );
};

export default Hero;