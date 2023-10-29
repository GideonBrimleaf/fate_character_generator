/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { render } from '@testing-library/react';

import CharacterStatBlock from './CharacterStatBlock';

it('renders correctly', () => {
  // Arrange
  const props = {
    characterStats: {
      expectedName: 'Expected value',
    },
    statBlock: 'expected-block',
  };

  // Act
  const result = render(
    <CharacterStatBlock {...props} />,
  );

  // Assert
  expect(result.asFragment()).toMatchSnapshot();
});
