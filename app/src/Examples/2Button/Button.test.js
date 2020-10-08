import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Button should findable using label', () => {
  // 1. preparar escenario y variables necesarios
  const handleClick = jest.fn();
  // 2. ejecutar el escenario
  const { getByLabelText } = render(<Button onClick={handleClick}>Click me!</Button>);
  const button = getByLabelText("button-clickeable");
  fireEvent.click(button)
  
  // 3. validar assertions / expects
  expect(handleClick).toHaveBeenCalledWith("I got press");

});
