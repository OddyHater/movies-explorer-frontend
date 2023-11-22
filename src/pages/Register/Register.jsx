import React from 'react';
import { Link } from 'react-router-dom';

import './register.css'
import logoIcon from '../../images/svg/header-logo.svg'

import Wrapper from '../../components/Wrapper/Wrapper';
import InputContainer from '../../components/InputContainer/InputContainer';

import { ROUTE_SIGNUP } from '../../constant/routes';

const Register = () => {
  const sectionModifier = 'register'
  return (
    <div className='register'>
      <Wrapper modifier={sectionModifier}>
        <div className="register__hero">
          <img src={logoIcon} alt="" className="register__logo" />
          <h1 className="register__title">Добро пожаловать!</h1>
        </div>
        <form action="#" className='register__form'>

          <InputContainer
            modifier={sectionModifier}
            placeholder={'Введите имя'}
            inputType={'text'}
            inputName={'name'}
            label={'Имя'}
          />

          <InputContainer
            modifier={sectionModifier}
            placeholder={'Введите e-mail'}
            inputType={'text'}
            inputName={'email'}
            label={'E-mail'}
          />

          <InputContainer
            modifier={sectionModifier}
            placeholder={'Введите пароль'}
            inputType={'password'}
            inputName={'password'}
            label={'Пароль'}
          />

          <button type='submit' className='register__submit'>
            Зарегистрироваться
          </button>

          <div className="register__bottom-container">
            Уже зарегистрированы?
            <Link to={ROUTE_SIGNUP} className="register__link">Войти</Link>
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default Register;