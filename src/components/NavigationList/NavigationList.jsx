import React from 'react';

import logButtonImage from '../../images/svg/log-button-image.svg'
import './navigation-list.css';

const NavigationList = () => {
  const isAuth = false;

  return (
   <>
     {isAuth ? 
      <>
        <ul className="navigation__link-list navigation__link-list_auth">
          <li className="navigation__link-item navigation__link-item_auth">
            <a href="/" className="navigation__link navigation__link_auth">Фильмы</a>
          </li>
          <li className="navigation__link-item navigation__link-item_auth">
            <a href="/" className="navigation__link navigation__link_auth">Сохранённые фильмы</a>
          </li>
        </ul>
        <button className='navigation__button'>
          Аккаунт
          <img src={logButtonImage} alt="" className="navigation__button-image" />
        </button>
      </>
      :
      <ul className="navigation__link-list">
        <li className="navigation__link-item">
          <a href="/" className="navigation__link">Регистрация</a>
        </li>
        <li className="navigation__link-item">
          <a href="/" className="navigation__link navigation__link_enter">Войти</a>
        </li>
      </ul>
    }
   </>
  );
};

export default NavigationList;