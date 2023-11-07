import React, { useState } from 'react';

import './movies-card.css';

const MoviesCard = ({ duration, thumbnail, nameRU }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleCardButtonClick = () => {
    setIsSaved(!isSaved);
    //+api
  }

  const calculateDuration = () => {
    let result;

    if (duration < 60) {
      return result = `0ч ${duration}м`
    } else {
      result = `${Math.floor(duration / 60)}ч ${duration % 60}м`
    }

    return result;
  }

  return (
    <li className="movies-card">
      <div className="movies-card__text-container">
        <p className="movies-card__name">{nameRU}</p>
        <p className="movies-card__duration">{calculateDuration()}</p>
      </div>
      <img src={thumbnail} alt={nameRU} className='movies-card__image' />
      <button 
        className={isSaved ? 'movies-card__button movies-card__button_saved' : 'movies-card__button'}
        type='button'
        onClick={handleCardButtonClick}
      >
        {isSaved ? '✓' : 'Сохранить'}
      </button>
    </li>
  );
};

export default MoviesCard;