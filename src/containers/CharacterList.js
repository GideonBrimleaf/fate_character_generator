import React from 'react'
import CharacterSummary from '../components/CharacterSummary'
import './CharacterList.css'
import '../App.css'
import { Link } from 'react-router-dom'

const CharacterList = (props) => {

  const characterList = props.characters ? props.characters.map(character =>{
    return (
      <CharacterSummary characterDetails={character} key={character.id} deleteCharacter={props.deleteCharacter}/>
    )
  }) : null

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