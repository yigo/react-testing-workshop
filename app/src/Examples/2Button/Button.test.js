import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Button', () => {
  // 1. preparar escenario y variables necesarios
  const handleClick = jest.fn();

  // 2. ejecutar el escenario
  const { getByText } = render(<Button onClick={handleClick}>Click me!</Button>);
  const button = getByText("Click me!");
  fireEvent.click(button)
  
  // 3. validar assertions / expects
  expect(handleClick).toHaveBeenCalled();

});
