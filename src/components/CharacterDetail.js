import React from 'react'

const CharacterDetail = (props) => {

  const foundCharacter = props.characters.find(character => {
    return parseInt(props.match.params.characterId) === character.id
  })

  return (
    <main>
      <p>The character name is {foundCharacter.name}</p>
      <p>The whole character sheet goes here</p>
    </main>
  )
}
export default CharacterDetail
