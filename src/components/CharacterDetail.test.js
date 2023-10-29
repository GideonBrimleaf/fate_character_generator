/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { render } from '@testing-library/react';

import { AuthContext } from '../auth/Auth';
import { createFakeCharacter } from '../models/Character/__test__/character.fake';
import CharacterDetail from './CharacterDetail';

it('renders a loading message is character is not found', () => {
  // Arrange
  const props = {
    match: {
      params: {
        characterId: '1234',
      },
    },
    characters: [],
  };

  // Act
  const result = render(
    <AuthContext.Provider value={{ currentUser: null }}>
      <CharacterDetail {...props} />
    </AuthContext.Provider>,
  );

  // Assert
  expect(result.asFragment()).toMatchSnapshot();
});

it('renders character when a character is found', async () => {
  // Arrange
  const props = {
    match: {
      params: {
        characterId: '1234',
      },
    },
    characters: [createFakeCharacter(1234)],
  };

  // Act
  const result = render(
    <AuthContext.Provider value={{ currentUser: null }}>
      <CharacterDetail {...props} />
    </AuthContext.Provider>,
  );

  expect(result).toBeDefined();

  // Assert
  expect(result.asFragment()).toMatchSnapshot();
});
