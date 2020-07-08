const devURL = 'http://localhost:8080/characters'

export default {
  updateCharacters(charactersToStore) {
    return fetch(devURL, {
      method:'POST',
      body: JSON.stringify(charactersToStore),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .catch(error => console.log(error))
  }
}