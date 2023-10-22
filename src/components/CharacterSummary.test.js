import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import CharacterSummary from './CharacterSummary';

it('renders correctly', () => {
  // Arrange
  const props = {
    characterDetails: {
      id: 1234,
      name: 'expected name',
      stunts: [],
      aspects: { expectedAspectName: 'expected aspect value' },
      approaches: { expectedApproachName: 'expected appraoch value' },
      consequences: { expectedConName: 'expected con value' },
    }
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
