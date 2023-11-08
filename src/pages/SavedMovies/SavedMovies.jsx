import React from 'react';

import './saved-movies.css';
import CardImage from '../../images/card-image.png'

import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';


const SavedMovies = () => {

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
    }
  ];

  return (
    <div className='saved-movies'>
      <Header isOnMain={false} />
      <SearchForm />
      <MoviesCardList cardsArray={cardsArray} />
      <Footer />
    </div>
  );
};

export default SavedMovies;