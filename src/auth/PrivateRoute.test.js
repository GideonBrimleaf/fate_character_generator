import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from './Auth';
import PrivateRoute from './PrivateRoute';

it('renders nothing when the user is not logged in', () => {
  const result = render(
    <AuthContext.Provider value={{ currentUser: null }}>
      <MemoryRouter>
        <PrivateRoute />
      </MemoryRouter>
    </AuthContext.Provider>,
  );

  expect(result.asFragment()).toMatchSnapshot();
});

it('renders children when the user is not set', () => {
  const result = render(
    <AuthContext.Provider value={{ currentUser: true }}>
      <MemoryRouter>
        <PrivateRoute component={() => <div id="expected" />} />
      </MemoryRouter>
    </AuthContext.Provider>,
  );

  expect(result.asFragment()).toMatchSnapshot();
});
