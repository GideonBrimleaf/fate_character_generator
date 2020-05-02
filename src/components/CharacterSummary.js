import React from 'react'
import './CharacterSummary.css'
import { Link } from 'react-router-dom'

const CharacterSummary = (props) => {
  return (
    <Link className="character-link characterSummaryTile" to={`/character/${props.characterDetails.id}`}>
      <li>
        <h3>{props.characterDetails.name}</h3>
        <p>{props.characterDetails.highConcept}</p>
        <p>{props.characterDetails.trouble}</p>
      </li>
    </Link>
  )
}

export default CharacterSummary
