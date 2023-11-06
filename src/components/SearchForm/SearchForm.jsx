import React from 'react';

import Wrapper from '../Wrapper/Wrapper';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './search-form.css';

const SearchForm = () => {
  return (
    <section className='search-form'>
      <Wrapper modifier={'search-form'}>
        <form action="#" className='search-form__form form'>
          <input type="text" name='film' className='form__input' placeholder='Фильм' />
          <button type='submit' className='form__submit-button'>Поиск</button>
        </form>
        <FilterCheckbox />
      </Wrapper>
    </section>
  );
};

export default SearchForm;