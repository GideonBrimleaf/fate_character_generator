import React from 'react'
import './CharacterDetail.css'

const CharacterDetail = (props) => {

  const foundCharacter = props.characters.find(character => {
    return parseInt(props.match.params.characterId) === character.id
  })

  return (
    <main className="character-sheet">
      <h1>{foundCharacter.name}</h1>
      <section className="character-stats">
        <article>Refresh</article>
        <article>Aspects</article>
        <article>Approaches</article>
        <article>Stunts</article>
        <article>Consequences</article>
      </section>
    </main>
  )
}
export default CharacterDetail
