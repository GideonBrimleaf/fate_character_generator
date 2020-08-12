import React from 'react'
import './CharacterSummary.css'
import '../App.css'
import { Link } from 'react-router-dom'
import chunkos from '../lib/chunkos'

const CharacterSummary = (props) => {

  if (!props.characterDetails) return null

  const handleCharacterDeletion = () => {
    if (window.confirm("Are you sure you want to delete this character?")) {
      props.deleteCharacter(props.characterDetails)
    }
  } 

  const characterApproaches = Object.keys(props.characterDetails.approaches)

  // We want to create this structure for every pair of skills we have
  // <tr>
  //  <td>Sneaky</td>
  //  <td>1</td>
  //  <td>Clever</td>
  //  <td>2</td>
  // <tr>
  // if we just loop over the skills, we can insert the <tr> for every second item very
  // easily. Instead, we chunk the approach into an array of pairs 
  // [["sneaky", "clever"], ["forceful", "quick"]]
  // we can then map these to a <td> for each pair, and insert them both into a parent
  // <tr> element
  const skills = chunkos(characterApproaches, 2).reduce((acc, skillsPair) => {
   // get the first set of pairs and map the skill names to <td> elements with
   // the corresponding attribute to make
   // [<td>Sneaky</td><td>1</td>, <td>Quick</td><td>2</td>]
    let items = skillsPair.map(skill => {
      let approach = props.characterDetails.approaches[skill]
      return <>
        <td>{skill.charAt(0).toUpperCase() + skill.slice(1)}</td>
        <td>{approach}</td>
      </>
   })
   // pop this into the accumulator array with the parent <tr> tag attached
   // note this has taken the 2 items from the array and made it into just one item
   // [<tr><td>Sneaky</td><td>1</td><td>Quick</td><td>2</td></tr>]
    acc.push(<tr>{items[0]}{items[1]}</tr>)
    return acc;
  }, [])

  return (
    <li className="characterSummaryTile">
      <section>
        <Link className="character-link" to={`/character/${props.characterDetails.id}`}>
          <div className="character-summary-details">
            <h3>{props.characterDetails.name}</h3>
            <p className="highConcept">{props.characterDetails.aspects.highConcept}</p>
            <p className="trouble">"{props.characterDetails.aspects.trouble}"</p>
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
        <button className="primary-button" onClick={handleCharacterDeletion}>Delete</button>
        <Link className="primary-button" to={`/character/${props.characterDetails.id}/edit`}>Edit</Link>
      </section>
    </li>
  )
}

export default CharacterSummary
