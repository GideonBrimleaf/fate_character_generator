import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AuthContext } from './Auth';
import Login from './Login';

it('renders correctly when the user is not logged in', () => {
  const result = render(
    <AuthContext.Provider value={{ currentUser: null }}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </AuthContext.Provider>,
  );

  expect(result.asFragment()).toMatchSnapshot();
});
