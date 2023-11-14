import React from 'react';

import './register.css'

import Wrapper from '../../components/Wrapper/Wrapper';
import InputContainer from '../../components/InputContainer/InputContainer';

const Register = () => {
  const sectionModifier = 'register'
  return (
    <div className='register'>
      <Wrapper modifier={sectionModifier}>
        <div className="register__hero">
          <img src="/" alt="" className="register__logo" />
          <h1 className="register__title">Добро пожаловать!</h1>
        </div>
        <form action="#" className='register__form'>

          <InputContainer
            modifier={sectionModifier}
            placeholder={''}
            inputType={'text'}
            inputName={'name'}
            label={'Имя'}
          />

          <InputContainer
            modifier={sectionModifier}
            placeholder={''}
            inputType={'text'}
            inputName={'email'}
            label={'E-mail'}
          />

          <InputContainer
            modifier={sectionModifier}
            placeholder={''}
            inputType={'password'}
            inputName={'password'}
            label={'Пароль'}
          />

          <button type='submit' className='register__submit'>
            Зарегистрироваться
          </button>

          
        </form>
      </Wrapper>
    </div>
  );
};

export default Register;