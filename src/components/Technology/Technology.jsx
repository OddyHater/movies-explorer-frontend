import React from 'react';

import Wrapper from '../Wrapper/Wrapper';
import SectionTitle from '../SectionTitle/SectionTitle';

import './technology.css';

const Technology = () => {
  const sectionModifire = 'technology';
  
  const technologyArray = [
    'HTML',
    'CSS',
    'JS',
    'React',
    'Git',
    'Express.js',
    'mongoDB',
  ]


  return (
    <section className='technology'>
      <Wrapper modifier={sectionModifire}>
        <SectionTitle 
          modifier={sectionModifire}
          content={'Технологии'}
        />
        <div className="technology__text-container">
          <p className="technology__title">7 технологий</p>
          <p className="technology__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <ul className="technology__list">
          {technologyArray.map((item, i) => (
            <li key={i} className="technology__list-item">{item}</li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default Technology;