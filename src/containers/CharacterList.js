import React, { Component } from 'react'
import CharacterSummary from '../components/CharacterSummary'
import './CharacterList.css'

export default class CharacterList extends Component {

  constructor(props){
    super(props)
    this.state = {
      characters:[
                  {name:"Gideon Brimleaf", highConcept:"Tiefling Black Metal Bard"},
                  {name:"Tala Fernweaver", highConcept:"Draws on the powers of gods and demons"}
                ]
    }
  }

  render() {

    const characterList = this.state.characters.map(character =>{
      return (
        <CharacterSummary characterDetails={character} />
      )
    })

    return (
      <ul className="characterList">
        {characterList}
      </ul>
    )
  }
}
