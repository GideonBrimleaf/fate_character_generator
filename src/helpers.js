const devURL = 'http://localhost:8080/characters'

export default {
  updateCharacters(charactersToStore) {
    localStorage.setItem('characters', JSON.stringify(charactersToStore))

    return fetch(devURL, {
      method:'POST',
      body: JSON.stringify(charactersToStore),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .catch(error => console.log(error))
  },

  getCharacters() {
    return fetch(devURL)
      .then(res => res.json())
      .then(data => localStorage.setItem('characters', JSON.stringify(data.characters)))
  }
}