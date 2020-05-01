import React from 'react'

const CharacterDetail = (props) => {
  return (
    <main>
      <p>The character name is {props.character.name}</p>
      <p>The whole character sheet goes here</p>
    </main>
  )
}
export default CharacterDetail
