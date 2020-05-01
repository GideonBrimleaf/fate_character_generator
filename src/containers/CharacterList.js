import React from 'react'
import CharacterSummary from '../components/CharacterSummary'
import './CharacterList.css'

const CharacterList = (props) => {

  const characterList = props.characters.map(character =>{
    return (
      <CharacterSummary characterDetails={character} key={character.name}/>
    )
  })

    return (
      <ul className="characterList">
        {characterList}
      </ul>
    )
}

export default CharacterList