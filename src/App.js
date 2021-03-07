import React, { Component } from 'react';
import './App.css';
import CharacterList from './containers/CharacterList'
import CharacterForm from './containers/CharacterForm'
import NavBar from './components/NavBar'
import CharacterDetail from './components/CharacterDetail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Helpers from './lib/helpers.js'
import { AuthProvider } from './auth/Auth'
import Login from './auth/Login'
import PrivateRoute from './auth/PrivateRoute'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      characters: []
    }

    this.addCharacter = this.addCharacter.bind(this)
  }

  addCharacter(character) {
    const updatedCharacters = [...this.state.characters, character]
    this.setState({characters: updatedCharacters})

    return Helpers.updateCharacters(updatedCharacters)
  }

  deleteCharacter = (characterToDelete) => {
    const filteredCharacters = this.state.characters.filter(character => {
      return character.id !== characterToDelete.id
    })
    this.setState({characters: filteredCharacters})

    return Helpers.updateCharacters(filteredCharacters)
  }

  editCharacter = (editedCharacter) => {
    const filteredCharacters = this.state.characters.filter(character => {
      return character.id !== editedCharacter.id
    })

    const updatedCharacters = [...filteredCharacters, editedCharacter]
    this.setState({characters: updatedCharacters})

    return Helpers.updateCharacters(updatedCharacters)
  }

  componentDidMount(){
    Helpers.getCharacters()
    .then(data => {
      if (data) {
        this.setState({characters: data})
      }
    })
  }

  render(){

    return (
      <div className="App">
        <AuthProvider>
          <Router>
            <NavBar />
            <Switch>
            <PrivateRoute exact path="/" component={CharacterList} data={{ characters:this.state.characters, deleteCharacter:this.deleteCharacter }} />
            <PrivateRoute path="/new" component={CharacterForm} data={{ onCharacterCreated:this.addCharacter }} />
            <Route exact path="/character/:characterId" render={(matchProps) => <CharacterDetail {...matchProps} characters={this.state.characters} deleteCharacter={this.deleteCharacter} />} />
            <PrivateRoute exact path="/character/:characterId/edit" component={CharacterForm} data={{ onCharacterCreated:this.addCharacter, characters:this.state.characters, onCharacterEdited:this.editCharacter }} />
            <Route exact path="/login" component={Login} /> 
            </Switch> 
          </Router>
        </AuthProvider>
      </div>
    )
  }
}

export default App;
