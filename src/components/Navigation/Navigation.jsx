import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import './navigation.css';

import logButtonImage from '../../images/svg/log-button-image.svg';
import { ROUTE_MOVIES, ROUTE_SAVED_MOVIES, ROUTE_PROFILE, ROUTE_SIGNIN, ROUTE_SIGNUP } from '../../constant/routes';

const Navigation = () => {
  const user = useContext(UserContext);
  const isAuth = user.isAuth;

  return (
    <nav className="navigation">
      {isAuth ? 
      <>
        <ul className="navigation__link-list navigation__link-list_auth">
          <li className="navigation__link-item navigation__link-item_auth">
            <Link to={ROUTE_MOVIES} className="navigation__link navigation__link_auth">Фильмы</Link>
          </li>
          <li className="navigation__link-item navigation__link-item_auth">
            <Link to={ROUTE_SAVED_MOVIES} className="navigation__link navigation__link_auth">Сохранённые фильмы</Link>
          </li>
        </ul>
        <Link to={ROUTE_PROFILE} className='navigation__button'>
          Аккаунт
          <img src={logButtonImage} alt="" className="navigation__button-image" />
        </Link>
      </>
      :
      <ul className="navigation__link-list">
        <li className="navigation__link-item">
          <Link to={ROUTE_SIGNUP} className="navigation__link">Регистрация</Link>
        </li>
        <li className="navigation__link-item">
          <Link to={ROUTE_SIGNIN} className="navigation__link navigation__link_enter">Войти</Link>
        </li>
      </ul>
    }
    </nav>
  );
};

export default Navigation;