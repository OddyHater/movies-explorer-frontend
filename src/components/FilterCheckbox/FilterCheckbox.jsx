import React, { useState } from 'react';

import './filter-checkbox.css';

const FilterCheckbox = () => {

  const [isActive, setIsActive] = useState(true);

  const handleFilterClick = () => {
    setIsActive(!isActive);
  }

  return (
    <div className='filter-checkbox__container'>
      <div 
        className={`${isActive ? "filter-checkbox filter-checkbox_active" : "filter-checkbox"}`}
        onClick={handleFilterClick}
      />
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;