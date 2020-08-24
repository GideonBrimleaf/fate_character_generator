import React from 'react'
import './CharacterStatBlock.css'
import '../lib/aspects'
import aspects from '../lib/aspects'

const CharacterStatBlock = (props) => {

  let statItemNames

  if (props.ordered) {
    statItemNames = aspects
  } else {
    statItemNames = Object.keys(props.characterStats)
  }

  const prettifyName = (objectKey) => {
    const capitalisedFirstLetter = objectKey.charAt(0).toUpperCase() + objectKey.slice(1)
    const splitName = capitalisedFirstLetter.split(/(?=[A-Z])/)
    return splitName.join(' ')
  }

  const statItems = statItemNames.map(stat => {
    return (
      <tr key={prettifyName(stat)}>
        <td className='stat-name'>{ prettifyName(stat) }:</td>
        <td className={`${props.statBlock}-stat-description`}>{ props.characterStats[stat] }</td>
      </tr>
    )
  })

  return (
    <table className="padded-table">
      <caption className="table-header">{ props.characterStatCategory }</caption>
      <tbody>
        { statItems }
      </tbody>
    </table>
  )
}

export default CharacterStatBlock