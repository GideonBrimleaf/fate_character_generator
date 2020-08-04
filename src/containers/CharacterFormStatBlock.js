import React from 'react'
import '../App.css'
import './CharacterForm.css'
import '../components/CharacterDetail.css'
import '../components/CharacterStatBlock.css'

const CharacterFormStatBlock = (props) => {

  const statNames = Object.keys(props.stats)
  const prettyTableName = props.tableName.charAt(0).toUpperCase() + props.tableName.slice(1)

  const tableRows = statNames.map(stat => {
    const capitalisedFirstLetter = stat.charAt(0).toUpperCase() + stat.slice(1)
    const splitName = capitalisedFirstLetter.split(/(?=[A-Z])/)
    const prettyStatLabel = splitName.join(' ') 

    return (
      <tr key={stat}>
        <td className="stat-name">
          <label htmlFor={stat}>{ prettyStatLabel }:</label>
        </td>
        <td className="form-input">
          <input
            className="character-sheet-text primary-input"
            type="text" 
            id={stat}
            value={props.stats[stat]}
            onChange={(event) => props.handleFormStatChange(event, props.tableName)}
            required
          />
        </td>
      </tr>
    )
  })

  return(
    <table className="character-sheet-item-primary">
      <caption>{ prettyTableName }</caption>
      <tbody>
        { tableRows }
      </tbody>
    </table>
  )
}

export default CharacterFormStatBlock