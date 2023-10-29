/* eslint react/jsx-props-no-spreading: "off", react/no-access-state-in-setstate:"off" */
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterList from './containers/CharacterList';
import CharacterForm from './containers/CharacterForm';
import NavBar from './components/NavBar';
import CharacterDetail from './components/CharacterDetail';
import Helpers from './lib/helpers';
import { AuthProvider } from './auth/Auth';
import Login from './auth/Login';
import PrivateRoute from './auth/PrivateRoute';
import { Character } from './lib/models/Character';

interface AppProps {}
interface AppState {
  characters: Character[],
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      characters: [],
    };

    this.addCharacter = this.addCharacter.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.editCharacter = this.editCharacter.bind(this);
  }

  async componentDidMount(): Promise<void> {
    const characters = await Helpers.getCharacters();

    if (characters) {
      this.setState({ characters });
    }
  }

  addCharacter(character: Character): Promise<any> {
    const updatedCharacters = [...this.state.characters, character];
    this.setState({ characters: updatedCharacters });

    return Helpers.updateCharacters(updatedCharacters);
  }

  deleteCharacter(characterToDelete: Character): Promise<any> {
    const filteredCharacters = this.state.characters.filter(
      (character) => character.id !== characterToDelete.id,
    );
    this.setState({ characters: filteredCharacters });

    return Helpers.updateCharacters(filteredCharacters);
  }

  editCharacter(editedCharacter: Character): Promise<any> {
    const filteredCharacters = this.state.characters.filter(
      (character) => character.id !== editedCharacter.id,
    );

    const updatedCharacters = [...filteredCharacters, editedCharacter];
    this.setState({ characters: updatedCharacters });

    return Helpers.updateCharacters(updatedCharacters);
  }

  render() {
    return (
      <div className="App">
        <AuthProvider>
          <Router>
            <NavBar />
            <Switch>
              <PrivateRoute exact path="/" component={CharacterList} data={{ characters: this.state.characters, deleteCharacter: this.deleteCharacter }} />
              <PrivateRoute path="/new" component={CharacterForm} data={{ onCharacterCreated: this.addCharacter }} />
              <Route exact path="/character/:characterId" render={(matchProps) => <CharacterDetail {...matchProps} characters={this.state.characters} deleteCharacter={this.deleteCharacter} />} />
              <PrivateRoute exact path="/character/:characterId/edit" component={CharacterForm} data={{ onCharacterCreated: this.addCharacter, characters: this.state.characters, onCharacterEdited: this.editCharacter }} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Router>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
