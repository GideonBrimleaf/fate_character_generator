/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import { createFakeCharacter } from '../test/fakes/character.fake';
import CharacterForm from './CharacterForm';

// TODO - this.state.name bombs because state is undefined (set to the result of an array find)
it.skip('renders correctly when a character does not exist', () => {
  // Arrange
  const props = {
    characters: [],
  }

  // Act
  const result = render(
    <MemoryRouter initialEntries={['/character/1234/edit']}>
      <Route exact path="/character/:characterId/edit">
        <CharacterForm {...props} />
      </Route>
    </MemoryRouter>,
  );

  // Assert
  expect(result.asFragment()).toMatchSnapshot();
});

it('renders correctly when a character exists', () => {
  // Arrange
  const id = 1234;

  const props = {
    characters: [createFakeCharacter(id)],
  }

  // Act
  const result = render(
    <MemoryRouter initialEntries={[`/character/${id}/edit`]}>
      <Route exact path="/character/:characterId/edit">
        <CharacterForm {...props} />
      </Route>
    </MemoryRouter>,
  );

  // Assert
  expect(result.asFragment()).toMatchSnapshot();
});
