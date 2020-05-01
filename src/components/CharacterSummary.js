import React from 'react'
import './CharacterSummary.css'

const CharacterSummary = (props) => {
  return (
    <a href={`/character/${props.characterDetails.id}`}>
      <li className="characterSummaryTile">
        <h3>{props.characterDetails.name}</h3>
        <p>{props.characterDetails.highConcept}</p>
        <p>{props.characterDetails.trouble}</p>
      </li>
    </a>
  )
}

export default CharacterSummary
