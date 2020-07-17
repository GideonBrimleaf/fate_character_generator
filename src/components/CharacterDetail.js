import React from 'react'
import './CharacterDetail.css'

const CharacterDetail = (props) => {

  const foundCharacter = props.characters.find(character => {
    return parseInt(props.match.params.characterId) === character.id
  })

  return (
    <main className="character-sheet">
      <div className="character-information">
        <h1>{foundCharacter.name}</h1>
        <p>The whole character sheet goes here</p>
      </div>
    </main>
  )
}
export default CharacterDetail
