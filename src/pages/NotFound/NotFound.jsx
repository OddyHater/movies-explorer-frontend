import React from 'react';

import './not-found.css';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className="not-found__content-wrapper">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <a href="/" className="not-found__link">Назад</a>
    </div>
  );
};

export default NotFound;