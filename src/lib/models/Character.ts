export interface Character {
  id: string,
  name: string,
  aspects: {
    highConcept: string,
    trouble: string,
    relationship: string,
    aspectOne: string,
    aspectTwo: string,
  },
  approaches: {
    careful: string,
    clever: string,
    flashy: string,
    forceful: string,
    quick: string,
    sneaky: string,
  },
  stunts: [],
  consequences: {
    mild: string,
    moderate:string,
    severe: string,
  },
  refresh: number,
}

// interface ICharacterStore {}

// export class CharacterStore implements ICharacterStore {
//     devURL: string = 'http://localhost:8080/characters';
//     db

//     constructor(){
//         const rootRef = db.ref('characters');
//     }

//     updateCharacters(charactersToStore: Character[]): Promise<any> {
//         localStorage.setItem('characters', JSON.stringify(charactersToStore));
    
//         if (process.env.NODE_ENV !== 'production') {
//           return fetch(devURL, {
//             method: 'POST',
//             body: JSON.stringify(charactersToStore),
//             headers: { 'Content-Type': 'application/json' },
//           })
//             .then((res) => res.json())
//             .catch((error) => console.log(error));
//         }
//         return rootRef.set(charactersToStore);
//       }
    
//       getCharacters(): Promise<Character[] | undefined> {
//         if (process.env.NODE_ENV !== 'production') {
//           return fetch(devURL)
//             .then((res) => res.json())
//             .then((data) => data.characters);
//         }
    
//         return rootRef.once('value').then((data) => data.val());
//       },
// }
