/* eslint no-console: "off" */
import { db } from './fire';
import { Character } from './models/Character';

const devURL = 'http://localhost:8080/characters';
const rootRef = db.ref('characters');

export default {
  updateCharacters(charactersToStore: Character[]): Promise<any> {
    localStorage.setItem('characters', JSON.stringify(charactersToStore));

    if (process.env.NODE_ENV !== 'production') {
      return fetch(devURL, {
        method: 'POST',
        body: JSON.stringify(charactersToStore),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => res.json())
        .catch((error) => console.log(error));
    }
    return rootRef.set(charactersToStore);
  },

  getCharacters(): Promise<Character[]> {
    if (process.env.NODE_ENV !== 'production') {
      return fetch(devURL)
        .then((res) => res.json())
        .then((data) => data.characters);
    }

    return rootRef.once('value').then((data) => data.val());
  },
};
