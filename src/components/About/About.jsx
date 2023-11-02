import './about.css'

import React from 'react';
import Wrapper from '../Wrapper/Wrapper';

const About = () => {
  return (
    <section className='about'>
      <Wrapper modifier={'about'}>
        <h2 className="about__title">О проекте</h2>
        <div className="about__description-container">
          <div className="about__description-item description-item">
            <h3 className="description-item__title">Дипломный проект включал 5 этапов</h3>
            <p className="description-item__subtitle">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className="about__description-item description-item">
            <h3 className="description-item__title">На выполнение диплома ушло 5 недель</h3>
            <p className="description-item__subtitle">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about__timeline timeline">
          <div className='timeline__item timeline__item_one'>
            1 неделя
          </div>
          <div className='timeline__item timeline__item_four'>
            4 недели
          </div>
          <div className='timeline__item timeline__item_back'>
            Back-end
          </div>
          <div className='timeline__item timeline__item_front'>
            Front-end
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;