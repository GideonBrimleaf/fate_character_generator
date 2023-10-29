import React from 'react';
import { Link } from 'react-router-dom';
import CharacterSummary from '../components/CharacterSummary';
import './CharacterList.css';
import '../App.css';

const CharacterList = (props) => {
  const characterList = props.characters ? props.characters.map((character) => (
    <CharacterSummary
      characterDetails={character}
      key={character.id}
      deleteCharacter={props.deleteCharacter}
    />
  )) : null;

  const newCharacterButton = <Link className="primary-button" to="/new">Create a New Character</Link>;

  const optionalCharacterButton = (
    props.characters.length > 0 ? newCharacterButton : null
  );

  return (
    <main>
      <h1>Fate Character Manager</h1>
      {newCharacterButton}
      <ul className="characterList">
        {characterList}
      </ul>
      {optionalCharacterButton}
    </main>
  );
};

export default CharacterList;
