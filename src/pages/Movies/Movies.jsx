import React from 'react';

import './movies.css';

import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';

const Movies = () => {
  return (
    <div className='movies'>
      <Header isOnMain={false} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  );
};

export default Movies;