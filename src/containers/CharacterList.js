import React, { Component } from 'react'
import CharacterSummary from '../components/CharacterSummary'
import './CharacterList.css'

export default class CharacterList extends Component {

  constructor(props){
    super(props)
    this.state = {
      characters:[
                  {name:"Gideon Brimleaf", highConcept:"Tiefling Black Metal Bard", trouble:"Doomed to be cursed by dark forces"},
                  {name:"Tala Fernweaver", highConcept:"Draws on the powers of gods and demons", trouble:"Doesn't know when to quit"}
                ]
    }
  }

  render() {

    const characterList = this.state.characters.map(character =>{
      return (
        <CharacterSummary characterDetails={character} key={character.name} />
      )
    })

    return (
      <ul className="characterList">
        {characterList}
      </ul>
    )
  }
}
