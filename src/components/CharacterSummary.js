import React from 'react'
import './CharacterSummary.css'
import '../App.css'
import { Link } from 'react-router-dom'

const CharacterSummary = (props) => {

  if (!props.characterDetails) return null

  const handleCharacterDeletion = () => {
    if (window.confirm("Are you sure you want to delete this character?")) {
      props.deleteCharacter(props.characterDetails)
    }
  }

  const characterApproaches = Object.keys(props.characterDetails.approaches)

  const skillsHeaders = characterApproaches.map(skill => {
    const abbreviatedSkill = skill.substring(0,2)
    return <td key={props.characterDetails.id + skill}>{abbreviatedSkill.charAt(0).toUpperCase() + abbreviatedSkill.slice(1)}</td>
  })

  const skills = characterApproaches.map(skill => {
    return <td key={props.characterDetails.id + skill}>{props.characterDetails.approaches[skill]}</td>
  })

  return (
    <li className="characterSummaryTile">
      <section>
        <Link className="character-link" to={`/character/${props.characterDetails.id}`}>
          <div className="character-summary-details">
            <h3>{props.characterDetails.name}</h3>
            <p>{props.characterDetails.aspects.highConcept}</p>
            <p>{props.characterDetails.aspects.trouble}</p>
          </div>
        </Link>
      </section>
      <section className="option-links">
        <Link className="character-link" to={`/character/${props.characterDetails.id}`}>
          <table className="character-skills-table">
            <caption>Approaches</caption>
            <tbody>
              <tr>{ skillsHeaders }</tr>
              <tr>{ skills }</tr>
            </tbody>
          </table>
        </Link>
        <button className="primary-button" onClick={handleCharacterDeletion}>Delete</button>
        <Link className="primary-button" to={`/character/${props.characterDetails.id}/edit`}>Edit</Link>
      </section>
    </li>
  )
}

export default CharacterSummary
