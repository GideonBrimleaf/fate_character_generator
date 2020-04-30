import React from 'react';
import './App.css';
import CharacterList from './containers/CharacterList'
import CharacterForm from './containers/CharacterForm'

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Fate Accelerated Character Manager!</h1>
      <CharacterList />
      <CharacterForm />
    </div>
  );
}

export default App;
