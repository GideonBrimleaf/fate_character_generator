import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import { createFakeCharacter } from '../test/fakes/character.fake';
import CharacterSummary from './CharacterSummary';

it('renders correctly', () => {
  // Arrange
  const props = {
    characterDetails:  createFakeCharacter(1234),
  }

  // Act
  const result = render(
    <MemoryRouter>
      <CharacterSummary {...props} />
    </MemoryRouter>
  );

  // Assert
  expect(result.asFragment()).toMatchSnapshot();
});
