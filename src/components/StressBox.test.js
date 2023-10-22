import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import { AuthContext } from '../auth/Auth';
import StressBox from './StressBox';

it('renders correctly', () => {
  // Arrange
  const props = {}

  // Act
  const result = render(
    <StressBox {...props}/>
  );

  // Assert
  expect(result.asFragment()).toMatchSnapshot();
});
