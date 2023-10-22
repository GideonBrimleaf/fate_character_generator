import React from 'react';

import { render } from '@testing-library/react';
import App from './App';

it('renders correctly', () => {
  const result = render(<App />);

  expect(result.asFragment()).toMatchSnapshot();
});
