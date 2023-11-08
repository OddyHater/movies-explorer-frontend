import React from 'react';

import './movies-cards.css';

import Wrapper from '../Wrapper/Wrapper';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ cardsArray, isSavedList }) => {

  return (
    <Wrapper modifier={'movies-cards'}>
      <ul className="movies-cards">
        {cardsArray.map((card) => (
          <MoviesCard
            key={card.id}
            duration={card.duration}
            thumbnail={card.thumbnail}
            nameRU={card.nameRU}
          />
        ))}
      </ul>
      {cardsArray.length >= 12 &&
        <button type='button' className='movies-cards__more-button'>Ещё</button>
      }
    </Wrapper>
  );
};

export default MoviesCardList;