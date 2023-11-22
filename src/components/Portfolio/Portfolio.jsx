import React from 'react';

import Wrapper from '../Wrapper/Wrapper';

import './portfolio.css';

const Portfolio = () => {
  const sectionModifire = 'portfolio';

  return (
    <section className='portfolio'>
      <Wrapper modifier={sectionModifire}>
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__list-item">
            <a 
              href='https://oddyhater.github.io/portfolio/' 
              className="portfolio__item-text"
              target='_blank'
              rel="noopener noreferrer"
              >
                Статичный сайт
            </a>
            ↗
          </li>
          <li className="portfolio__list-item">
            <a
            href='https://menuuu.io/' 
            className="portfolio__item-text"
            target='_blank'
            rel="noopener noreferrer"
            >
              Адаптивный сайт
            </a>
            ↗
          </li>
          <li className="portfolio__list-item">
            <a
            href='https://menuuu.io/' 
            className="portfolio__item-text"
            target='_blank'
            rel="noopener noreferrer"
            >
              Одностраничное приложение
            </a>
            ↗
          </li>
        </ul>
      </Wrapper>
    </section>
  );
};

export default Portfolio;