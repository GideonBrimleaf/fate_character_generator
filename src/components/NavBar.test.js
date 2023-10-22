import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import { AuthContext } from '../auth/Auth';
import NavBar from './NavBar';

it('renders correctly when user is not logged in', () => {
  // Arrange
  const props = {}

  // Act
  const result = render(
    <AuthContext.Provider value={{ currentUser: null }}>
      <NavBar {...props} />
    </AuthContext.Provider>
  );

  // Assert
  expect(result.asFragment()).toMatchSnapshot();
});

it('renders correctly when user is logged in', () => {
  // Arrange
  const props = {}

  // Act
  const result = render(
    <AuthContext.Provider value={{ currentUser: true }}>
      <MemoryRouter>
        <NavBar {...props} />
      </MemoryRouter>
    </AuthContext.Provider>
  );

  // Assert
  expect(result.asFragment()).toMatchSnapshot();
});
