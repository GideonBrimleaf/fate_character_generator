import { db } from '../../lib/fire';
import { Character, CharacterStore } from './types';

interface FirebaseCharacterStoreConfig {
  devServer: string | undefined,
}

export class FirebaseCharacterStore implements CharacterStore {
  devServer: string | null = null;

  db: firebase.database.Reference | null = null;

  constructor(config?: FirebaseCharacterStoreConfig) {
    if (config && config.devServer) {
      this.devServer = config.devServer;
    } else {
      this.db = db.ref('characters');
    }
  }

  updateCharacters(charactersToStore: Character[]): Promise<any> {
    localStorage.setItem('characters', JSON.stringify(charactersToStore));

    if (this.devServer) {
      return fetch(this.devServer, {
        method: 'POST',
        body: JSON.stringify(charactersToStore),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => res.json());
    }

    return this.db.set(charactersToStore);
  }

  getCharacters(): Promise<Character[] | undefined> {
    if (this.devServer) {
      return fetch(this.devServer)
        .then((res) => res.json())
        .then((data) => data.characters);
    }

    return this.db.once('value').then((data) => data.val());
  }
}
