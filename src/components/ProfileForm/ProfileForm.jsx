import React from 'react';

import './profile-form.css';

import Wrapper from '../Wrapper/Wrapper';
import InputContainer from '../InputContainer/InputContainer';

const ProfileForm = ({ userData }) => {

  const handleSubmitClick = (evt) => {
    evt.preventDefault();

    //api patch profile
    return
  }

  const handleExitClick = () => {
    //delete jwt, route to /signin
    return
  }

  return (
    <Wrapper modifier={'profile-form'}>
      <h1 className='profile-form__title'>Привет, {userData?.name}</h1>
      <form className='profile-form' onSubmit={(evt) => handleSubmitClick(evt)}>

        <InputContainer
          modifier={'profile-form'}
          placeholder={userData?.name}
          inputType={'text'}
          inputName={'name'}
          label={'Имя'}
        />

        <InputContainer
          modifier={'profile-form'}
          placeholder={userData?.email}
          inputType={'text'}
          inputName={'email'}
          label={'E-mail'}
        />

        <div className="profile-form__button-container">
          <button className='profile-form__button profile-form__button_submit' type='submit'>Редактировать</button>
          <button className='profile-form__button profile-form__button_exit' type='button' onClick={handleExitClick}>Выйти из аккаунта</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default ProfileForm;