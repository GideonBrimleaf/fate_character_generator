import React, { Component } from 'react'
import CharacterDetail from '../components/CharacterDetail'

export default class CharacterList extends Component {

  constructor(props){
    super(props)
    this.state = {
      characters:[1,2]
    }
  }

  render() {

    const characterList = this.state.characters.map(character =>{
      return (
        <CharacterDetail characterDetails="character" />
      )
    })

    return (
      <div>
        <h3>This is where the characters will go</h3>
        {characterList}
      </div>
    )
  }
}
