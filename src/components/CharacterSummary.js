import React from 'react'
import './CharacterSummary.css'

const CharacterSummary = (props) => {
  return (
    <li className="characterSummary">
      <h3>{props.characterDetails.name}</h3>
      <p>{props.characterDetails.highConcept}</p>
    </li>
  )
}

export default CharacterSummary
