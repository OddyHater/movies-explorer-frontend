import React from 'react';

import './profile-form.css';

import Wrapper from '../Wrapper/Wrapper';

const ProfileForm = ({ userData }) => {

  return (
    <Wrapper modifier={'profile-form'}>
      <h1 className='profile-form__title'>Привет, {userData?.name}</h1>
      <form className='profile-form'>
        <div className="profile-form__input-container">
          <label htmlFor="name">Имя</label>
          <input className='profile-form__input' type="text" name='name' id='name' placeholder={userData?.name} />
        </div>
        <div className="profile-form__input-container">
          <label htmlFor="email">E-mail</label>
          <input className='profile-form__input' type="text" name='email' id='email' placeholder={userData?.email} />
        </div>
        <div className="profile-form__button-container">
          <button className='profile-form__submit' type='submit'>Редактировать</button>
          <button className='profile-form__submit' type='button'>Выйти из аккаунта</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default ProfileForm;