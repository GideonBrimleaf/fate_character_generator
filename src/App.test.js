import React from 'react';

import { act, render } from '@testing-library/react';
import App from './App';

it('renders correctly', () => {
  const result = render(<App />);

  expect(result.asFragment()).toMatchSnapshot();
});

// TODO - a warning is being fired to console due to uncaptured side effects - there must be a better pattern for this
it('renders the login screen on when the user is not logged in', async () => {
  let result = null; 

  await act(() => {
    result = render(<App />);
  });

  expect(result.getByText('Log In')).toBeTruthy();
});