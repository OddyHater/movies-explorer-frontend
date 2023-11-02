import './hero.css';
import heroImage from '../../images/svg/hero-image.svg';

import Wrapper from '../Wrapper/Wrapper';
import React from 'react';

const Hero = () => {
  return (
    <section className='hero'>
      <Wrapper modifier={'hero'}>
        <div className="hero__text-container">
          <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="hero__subtitle">Листайте ниже, чтобы узнать больше про этот<br/>проект и его создателя.</p>
          <a href="/" className="hero__link">Узнать больше</a>
        </div>
        <img src={heroImage} alt="" className="hero__image" />
      </Wrapper>
    </section>
  );
};

export default Hero;