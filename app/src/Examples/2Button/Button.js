import React from 'react';

const Button = ({ onClick, children }) => (
  <button aria-label="button-clickeable" onClick={() => onClick("I got press")}>{children}</button>
);

export default Button;