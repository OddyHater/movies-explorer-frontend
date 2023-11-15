import React from 'react';
import './navigation-list.css';

import logButtonImage from '../../images/svg/log-button-image.svg';
import { ROUTE_MOVIES, ROUTE_SAVED_MOVIES } from '../../constant/routes';

const NavigationList = () => {
  const isAuth = true;

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