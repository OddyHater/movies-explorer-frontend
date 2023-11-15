import React from 'react';
import { Link } from 'react-router-dom';

import './not-found.css';

import { ROUTE_ROOT } from '../../constant/routes';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className="not-found__content-wrapper">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <Link to={ROUTE_ROOT} className="not-found__link">Назад</Link>
    </div>
  );
};

export default NotFound;