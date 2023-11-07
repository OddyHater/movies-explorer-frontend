import React from 'react';

import './movies-cards.css';
import CardImage from '../../images/card-image.png'

import Wrapper from '../Wrapper/Wrapper';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {

  const cardArray = [
    {
      id: 1,
      duration: 120,
      thumbnail: CardImage,
      nameRU: 'В погоне за Бенкси'
    },
    {
      id: 2,
      duration: 42,
      thumbnail: CardImage,
      nameRU: 'В погоне за Бенкси'
    },
    {
      id: 3,
      duration: 42,
      thumbnail: CardImage,
      nameRU: 'В погоне за Бенкси'
    },
    {
      id: 4,
      duration: 42,
      thumbnail: CardImage,
      nameRU: 'В погоне за Бенкси'
    },
    {
      id: 5,
      duration: 42,
      thumbnail: CardImage,
      nameRU: 'В погоне за Бенкси'
    },
    {
      id: 6,
      duration: 42,
      thumbnail: CardImage,
      nameRU: 'В погоне за Бенкси'
    },
    {
      id: 7,
      duration: 120,
      thumbnail: CardImage,
      nameRU: 'В погоне за Бенкси'
    },
    {
      id: 8,
      duration: 42,
      thumbnail: CardImage,
      nameRU: 'В погоне за Бенкси'
    },
    {
      id: 9,
      duration: 42,
      thumbnail: CardImage,
      nameRU: 'В погоне за Бенкси'
    },
    {
      id: 10,
      duration: 42,
      thumbnail: CardImage,
      nameRU: 'В погоне за Бенкси'
    },
    {
      id: 11,
      duration: 42,
      thumbnail: CardImage,
      nameRU: 'В погоне за Бенкси'
    },
    {
      id: 12,
      duration: 42,
      thumbnail: CardImage,
      nameRU: 'В погоне за Бенкси'
    },
  ]

  return (
    <Wrapper modifier={'movies-cards'}>
      <ul className="movies-cards">
        {cardArray.map((card) => (
          <MoviesCard
            key={card.id}
            duration={card.duration}
            thumbnail={card.thumbnail}
            nameRU={card.nameRU}
          />
        ))}
      </ul>
      <button type='button' className='movies-cards__more-button'>Ещё</button>
    </Wrapper>
  );
};

export default MoviesCardList;