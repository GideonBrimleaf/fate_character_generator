import React from 'react';

import { render } from '@testing-library/react';
import { AuthProvider } from './Auth';

it('renders correctly when pending', () => {
  const result = render(<AuthProvider />);
  expect(result.asFragment()).toMatchSnapshot();
});
