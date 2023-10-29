import React from 'react';

import { render } from '@testing-library/react';

import { MockCharacterStore } from './models/Character/__test__'
import App from './App';



it('renders correctly', () => {
  const result = render(<App characterStore={new MockCharacterStore()}/>);

  expect(result.asFragment()).toMatchSnapshot();
});
