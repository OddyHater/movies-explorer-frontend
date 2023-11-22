import React from 'react';

import Wrapper from '../Wrapper/Wrapper';

import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Wrapper modifier={'footer'} >
        <p className="footer__uppertext">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__content-container">
          <p className="footer__copyright">© 2023</p>
          <div className="footer__links-container">
            <a
              href="https://practicum.yandex.ru/"
              className="footer__link"
              target='_blank'
              rel='noopener noreferrer'
            >
              Яндекс.Практикум
            </a>
            <a
              href="https://github.com/OddyHater/"
              className="footer__link"
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;