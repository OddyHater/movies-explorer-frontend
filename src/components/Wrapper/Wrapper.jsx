import './wrapper.css';

import React from 'react';

const Wrapper = ({modifier, children}) => {
  return (
    <div className={`${modifier}__wrapper wrapper`}>
      { children }
    </div>
  );
};

export default Wrapper;