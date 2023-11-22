import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import headerLogo from '../../images/svg/header-logo.svg';

import Wrapper from '../Wrapper/Wrapper';
import Navigation from '../Navigation/Navigation';

import { ROUTE_ROOT } from '../../constant/routes';

const Header = ({ isOnMain }) => {
  
  const componentStyle = {
    'backgroundColor': isOnMain ? "#073042" : "var(--bg-main)"
  };

  return (
    <header className='header' style={componentStyle}>
      <Wrapper modifier={'header'}>
        <Link to={ROUTE_ROOT}>
          <img src={headerLogo} alt="" className='header__logo' />
        </Link>
        <Navigation />
      </Wrapper>
    </header>
  );
};

export default Header;