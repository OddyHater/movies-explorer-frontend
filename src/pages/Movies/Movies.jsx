import React from 'react';

import './movies.css';
import CardImage from '../../images/card-image.png';

import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';

const Movies = () => {

  const cardsArray = [
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
  ];

  return (
    <div className='movies'>
      <Header isOnMain={false} />
      <SearchForm />
      <MoviesCardList cardsArray={cardsArray} />
      <Footer />
    </div>
  );
};

export default Movies;