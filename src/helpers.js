import fire from './fire'

const devURL = 'http://localhost:8080/characters'
const rootRef = fire.database().ref("characters")

export default {
  updateCharacters(charactersToStore) {
    localStorage.setItem('characters', JSON.stringify(charactersToStore))

    if(process.env.NODE_ENV !== 'production') {
      return fetch(devURL, {
        method:'POST',
        body: JSON.stringify(charactersToStore),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .catch(error => console.log(error))
    }    
  },

  getCharacters() {
    if(process.env.NODE_ENV !== 'production') {
      return fetch(devURL)
      .then(res => res.json())
      .then(data => localStorage.setItem('characters', JSON.stringify(data.characters)))
    }
    else {
      return rootRef.once('value').then(data => localStorage.setItem('characters', JSON.stringify(data.val())))
    }
  }
}