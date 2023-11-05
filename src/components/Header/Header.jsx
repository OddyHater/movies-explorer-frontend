import React from 'react';

import './header.css';
import headerLogo from '../../images/svg/header-logo.svg';

import Wrapper from '../Wrapper/Wrapper';
import Navigation from '../Navigation/Navigation';

const Header = ({ isOnMain }) => {
  const componentStyle = {
    'backgroundColor': isOnMain ? "#073042" : "var(--bg-main)"
  };

  return (
    <header className='header' style={componentStyle}>
      <Wrapper modifier={'header'}>
        <img src={headerLogo} alt="" className='header__logo' />
        <Navigation />
      </Wrapper>
    </header>
  );
};

export default Header;