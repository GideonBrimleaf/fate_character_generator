import React from 'react'
import './CharacterSummary.css'

const CharacterSummary = (props) => {
  return (
    <li className="characterSummaryTile">
      <h3>{props.characterDetails.name}</h3>
      <p>{props.characterDetails.highConcept}</p>
      <p>{props.characterDetails.trouble}</p>
    </li>
  )
}

export default CharacterSummary
