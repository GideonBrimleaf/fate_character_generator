import React, { Component } from 'react';
import './App.css';
import CharacterList from './containers/CharacterList'
import CharacterForm from './containers/CharacterForm'
import NavBar from './components/NavBar'
import CharacterDetail from './components/CharacterDetail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      characters:[
                  {id: 1, name:"Gideon Brimleaf", highConcept:"Tiefling Black Metal Bard", trouble:"Doomed to be cursed by dark forces"},
                  {id: 2, name:"Tala Fernweaver", highConcept:"Draws on the powers of gods and demons", trouble:"Doesn't know when to quit"}
                ]
    }
  }

  addCharacter = (character) => {
    const updatedCharacters = [...this.state.characters, character]
    this.setState({characters: updatedCharacters})
    localStorage.setItem('characters', JSON.stringify(updatedCharacters))
  }

  deleteCharacter = (characterToDelete) => {
    const storedCharacters = JSON.parse(localStorage.getItem('characters'))
    const filteredCharacters = storedCharacters.filter(character => {
      return character.id !== characterToDelete.id
    })
    this.setState({characters: filteredCharacters})
    localStorage.setItem('characters', JSON.stringify(filteredCharacters))
  }

  render(){
    const storedCharacters = JSON.parse(localStorage.getItem('characters'))

    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
          <Route exact path="/" render={() => <CharacterList characters={storedCharacters} deleteCharacter={this.deleteCharacter} />} />
          <Route path="/new" render={() => <CharacterForm onCharacterCreated={this.addCharacter} />} />
          <Route path="/character/:characterId" render={(matchProps) => <CharacterDetail {...matchProps} characters={storedCharacters}/>} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
