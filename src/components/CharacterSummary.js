import React from 'react'
import './CharacterSummary.css'
import '../App.css'
import { Link } from 'react-router-dom'

const CharacterSummary = (props) => {

  const handleCharacterDeletion = () => {
    if (window.confirm("Are you sure you want to delete this character?")) {
      props.deleteCharacter(props.characterDetails)
    }
  }

  return (
    <li className="characterSummaryTile">
      <Link className="character-link" to={`/character/${props.characterDetails.id}`}>
        <h3>{props.characterDetails.name}</h3>
        <p>{props.characterDetails.aspects.highConcept}</p>
        <p>{props.characterDetails.aspects.trouble}</p>
      </Link>
      <button className="primary-button" onClick={handleCharacterDeletion}>Delete</button>
      <Link className="primary-button" to={`/character/${props.characterDetails.id}/edit`}>Edit</Link>
    </li>
  )
}

export default CharacterSummary
