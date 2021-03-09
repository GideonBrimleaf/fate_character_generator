import React from 'react'
import { Link } from 'react-router-dom'
import CharacterSummary from '../components/CharacterSummary'
import './CharacterList.css'
import '../App.css'

const CharacterList = (props) => {
  if (props.characters.length === 0) { return <p>Loading</p> }

  const characterList = props.characters ? props.characters.map((character) => (
    <CharacterSummary
      characterDetails={character}
      key={character.id}
      deleteCharacter={props.deleteCharacter}
    />
  )) : null

  return (
    <main>
      <h1>Fate Character Manager</h1>
      <Link className="primary-button" to="/new">Create a New Character</Link>
      <ul className="characterList">
        {characterList}
      </ul>
      <Link className="primary-button" to="/new">Create a New Character</Link>
    </main>
  )
}

export default CharacterList
