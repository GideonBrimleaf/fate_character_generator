/* eslint no-alert: "off" */
import React from 'react'
import './CharacterSummary.css'
import '../App.css'
import { Link } from 'react-router-dom'
import chunkos from '../lib/chunkos'

const CharacterSummary = (props) => {
  if (!props.characterDetails) return null

  const handleCharacterDeletion = () => {
    if (window.confirm('Are you sure you want to delete this character?')) {
      props.deleteCharacter(props.characterDetails)
    }
  }

  const characterApproaches = Object.keys(props.characterDetails.approaches)

  const skills = chunkos(characterApproaches, 2).reduce((tableRow, skillsPair) => {
    const items = skillsPair.map((skill) => {
      const approach = props.characterDetails.approaches[skill]
      return (
        <td key={props.characterDetails.id + skill} className="summary-skill-header">
          {skill.charAt(0).toUpperCase() + skill.slice(1)}
          :
          {approach}
        </td>
      )
    })
    tableRow.push(<tr key={props.characterDetails.id + skillsPair[0]}>{items}</tr>)
    return tableRow
  }, [])

  return (
    <li className="characterSummaryTile">
      <section>
        <Link className="character-link" to={`/character/${props.characterDetails.id}`}>
          <div className="character-summary-details">
            <h3>{props.characterDetails.name}</h3>
            <p className="highConcept">{props.characterDetails.aspects.highConcept}</p>
            <p className="trouble">
              {props.characterDetails.aspects.trouble}
            </p>
          </div>
        </Link>
      </section>
      <section className="option-links">
        <Link className="character-link" to={`/character/${props.characterDetails.id}`}>
          <table className="character-skills-table">
            <caption>Approaches</caption>
            <tbody>
              { skills }
            </tbody>
          </table>
        </Link>
        <Link className="primary-button" to={`/character/${props.characterDetails.id}/edit`}>Edit</Link>
        <button className="primary-button danger-button" type="submit" onClick={handleCharacterDeletion}>Delete</button>
      </section>
    </li>
  )
}

export default CharacterSummary
