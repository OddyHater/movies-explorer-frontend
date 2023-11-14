import React from 'react';

import './navigation.css';

import NavigationList from '../NavigationList/NavigationList';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavigationList />
    </nav>
  );
};

export default Navigation;