/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { render } from '@testing-library/react';

import StressBox from './StressBox';

it('renders correctly', () => {
  // Arrange
  const props = {};

  // Act
  const result = render(
    <StressBox {...props} />,
  );

  // Assert
  expect(result.asFragment()).toMatchSnapshot();
});
