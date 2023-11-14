import React from 'react';

const InputContainer = ({ modifier, placeholder, inputType, inputName, label }) => {
  return (
    <div className={`${modifier}__input-container input-container`}>
      <label htmlFor={inputName}>{label}</label>
      <input className={`${modifier}__input input`} type={inputType} name={inputName} id={inputName} placeholder={ placeholder } />
    </div>
  );
};

export default InputContainer;