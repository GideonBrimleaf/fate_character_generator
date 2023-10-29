import { CharacterStore } from '..';

export class MockCharacterStore implements CharacterStore {
  updateCharacters = jest.fn();

  getCharacters = jest.fn();
}
