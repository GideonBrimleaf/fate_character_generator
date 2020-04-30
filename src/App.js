import React from 'react';
import './App.css';
import CharacterList from './containers/CharacterList'

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Fate Accelerated Character Manager!</h1>
      <CharacterList />
    </div>
  );
}

export default App;
