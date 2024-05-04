import React from 'react';
import { useButtonContext } from './ButtonContext';

const ButtonComponent = () => {
  const { buttonClicked, handleClick } = useButtonContext();

  return (
    <div>
      <button onClick={handleClick}>
        {buttonClicked ? 'Button Clicked' : 'Click Me'}
      </button>
    </div>
  );
};

export default ButtonComponent;