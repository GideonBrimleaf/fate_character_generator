import React from 'react'
import './CharacterStatBlock.css'

const CharacterStatBlock = (props) => {

  const statItemNames = Object.keys(props.characterStats)

  const prettifyName = (objectKey) => {
    const capitalisedFirstLetter = objectKey.charAt(0).toUpperCase() + objectKey.slice(1)
    const splitName = capitalisedFirstLetter.split(/(?=[A-Z])/)
    return splitName.join(' ')
  }

  const statItems = statItemNames.map(stat => {
    console.log()
    return (
      <tr key={prettifyName(stat)}>
        <td className='stat-name'>{ prettifyName(stat) }:</td>
        <td className={`${props.statBlock}-stat-description`}>{ props.characterStats[stat] }</td>
      </tr>
    )
  })

  return (
    <table>
      <caption>{ props.characterStatCategory }</caption>
      <tbody>
        { statItems }
      </tbody>
    </table>
  )
}

export default CharacterStatBlock