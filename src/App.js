import React, { Component } from 'react';
import './App.css';
import CharacterList from './containers/CharacterList'
import CharacterForm from './containers/CharacterForm'
import NavBar from './components/NavBar'
import CharacterDetail from './components/CharacterDetail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      characters: []
    }
  }

  addCharacter = (character) => {
    const updatedCharacters = [...JSON.parse(localStorage.getItem('characters')), character]
    this.setState({characters: updatedCharacters})
    localStorage.setItem('characters', JSON.stringify(updatedCharacters))
  }

  deleteCharacter = (characterToDelete) => {
    const filteredCharacters = this.state.characters.filter(character => {
      return character.id !== characterToDelete.id
    })
    this.setState({characters: filteredCharacters})
    localStorage.setItem('characters', JSON.stringify(filteredCharacters))
  }

  componentDidMount(){
    if(!localStorage.getItem('characters')){
      fetch("http://localhost:3000/characters")
      .then(res => res.json())
      .then(data => localStorage.setItem('characters', JSON.stringify(data.characters)))
      .then(() => {
        this.setState({characters: JSON.parse(localStorage.getItem('characters'))})
      })
    } else {
      this.setState({characters: JSON.parse(localStorage.getItem('characters'))})
    }
  }

  render(){

    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
          <Route exact path="/" render={() => <CharacterList characters={this.state.characters} deleteCharacter={this.deleteCharacter} />} />
          <Route path="/new" render={() => <CharacterForm onCharacterCreated={this.addCharacter} />} />
          <Route path="/character/:characterId" render={(matchProps) => <CharacterDetail {...matchProps} characters={this.state.characters}/>} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
