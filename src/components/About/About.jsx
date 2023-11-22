
import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import SectionTitle from '../SectionTitle/SectionTitle';

import './about.css'

const About = () => {
  const sectionModifire = 'about';

  return (
    <section className='about'>
      <Wrapper modifier={sectionModifire}>
        <SectionTitle 
          modifier={sectionModifire}
          content={'О проекте'}
        />
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