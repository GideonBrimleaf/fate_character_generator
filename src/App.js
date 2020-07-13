import React, { Component } from 'react';
import './App.css';
import CharacterList from './containers/CharacterList'
import CharacterForm from './containers/CharacterForm'
import NavBar from './components/NavBar'
import CharacterDetail from './components/CharacterDetail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Helpers from './helpers.js'
import { AuthProvider } from './Auth'
import SignUp from './SignUp'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import Home from './Home'

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

    return Helpers.updateCharacters(updatedCharacters)
  }

  deleteCharacter = (characterToDelete) => {
    const filteredCharacters = this.state.characters.filter(character => {
      return character.id !== characterToDelete.id
    })
    this.setState({characters: filteredCharacters})

    return Helpers.updateCharacters(filteredCharacters)
  }

  componentDidMount(){
    if(!localStorage.getItem('characters')){
      Helpers.getCharacters()
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
        <AuthProvider>
          <Router>
            <NavBar />
            <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/new" render={() => <CharacterForm onCharacterCreated={this.addCharacter} />} />
            <Route path="/character/:characterId" render={(matchProps) => <CharacterDetail {...matchProps} characters={this.state.characters}/>} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            </Switch>
          </Router>
        </AuthProvider>
      </div>
    )
  }
}

export default App;
