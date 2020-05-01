import React, { Component } from 'react';
import './App.css';
import CharacterList from './containers/CharacterList'
import CharacterForm from './containers/CharacterForm'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      characters:[
                  {name:"Gideon Brimleaf", highConcept:"Tiefling Black Metal Bard", trouble:"Doomed to be cursed by dark forces"},
                  {name:"Tala Fernweaver", highConcept:"Draws on the powers of gods and demons", trouble:"Doesn't know when to quit"}
                ]
    }
    this.addCharacter = this.addCharacter.bind(this)
  }

  addCharacter(character){
    const updatedCharacters = [...this.state.characters, character]
    this.setState({characters: updatedCharacters})
  }

  render(){
  return (
    <div className="App">
      <h1>Welcome to the Fate Accelerated Character Manager!</h1>
      <CharacterList characters={this.state.characters}/>
      <CharacterForm onCharacterCreated={this.addCharacter}  />
    </div>
  )
  }
}

export default App;
