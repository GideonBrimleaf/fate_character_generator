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
    return (
      <li>
          <p className="stat-name">{ prettifyName(stat) }:</p> 
          <p className="stat-description">{ props.characterStats[stat] }</p>
      </li>
    )
  })

  return (
    <>
      <h5>{ props.characterStatCategory }</h5>
      <ul className="stat-block">
        { statItems }
      </ul>
    </>
  )
}

export default CharacterStatBlock