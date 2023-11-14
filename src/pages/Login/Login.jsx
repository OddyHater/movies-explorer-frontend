import React from 'react';

import './login.css';
import logoIcon from '../../images/svg/header-logo.svg'

import Wrapper from '../../components/Wrapper/Wrapper';
import InputContainer from '../../components/InputContainer/InputContainer';

const Login = () => {
  const sectionModifier = 'login'

  return (
    <div className='login'>
      <Wrapper modifier={sectionModifier}>
        <div className="login__hero">
          <img src={logoIcon} alt="" className="login__logo" />
          <h1 className="login__title">Рады видеть!</h1>
        </div>
        <form action="#" className='login__form'>

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

          <button type='submit' className='login__submit'>
            Войти
          </button>

          <div className="login__bottom-container">
            Ещё не зарегистрированы?
            <a href="/" className="login__link">Регистрация</a>
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default Login;