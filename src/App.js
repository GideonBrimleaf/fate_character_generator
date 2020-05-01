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
    this.addCharacter = this.addCharacter.bind(this)
  }

  addCharacter(character){
    const updatedCharacters = [...this.state.characters, character]
    this.setState({characters: updatedCharacters})
  }

  render(){

    const characterPaths = this.state.characters.map(character =>{
      return <Route key={character.id} path={`/character/${character.id}`} render={() => <CharacterDetail character={character} />}/>
    })

    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
          <Route exact path="/" render={() => <CharacterList characters={this.state.characters} />} />
          <Route path="/new" render={() => <CharacterForm onCharacterCreated={this.addCharacter} />} />
          {characterPaths}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
