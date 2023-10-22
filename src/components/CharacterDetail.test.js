import React from 'react';
import { render, act } from '@testing-library/react';

import { AuthContext } from '../auth/Auth';
import CharacterDetail from './CharacterDetail';

it('renders a loading message is character is not found', () => {
  // Arrange
  const props = {
    match: {
      params: {
        characterId: '1234',
      }
    },
    characters: [],
  }

  // Act
  const result = render(
    <AuthContext.Provider value={{ currentUser: null }}>
      <CharacterDetail {...props} />
    </AuthContext.Provider>
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
      }
    },
    characters: [
      {
        id: 1234,
        name: 'expected name',
        stunts: [],
        aspects: {expectedAspectName: 'expected aspect value'},
        approaches: {expectedApproachName: 'expected appraoch value'},
        consequences: {expectedConName: 'expected con value'},
      }
    ],
  }

  let result;

  // Act
  result = render(
    <AuthContext.Provider value={{ currentUser: null }}>
      <CharacterDetail {...props} />
    </AuthContext.Provider>
  );

  expect(result).toBeDefined();

  // Assert
  expect(result.asFragment()).toMatchSnapshot();
});