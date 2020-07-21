import React from 'react'
import './CharacterDetail.css'
import './CharacterStatBlock.css'
import CharacterStatBlock from './CharacterStatBlock'

const CharacterDetail = (props) => {

  const foundCharacter = props.characters.find(character => {
    return parseInt(props.match.params.characterId) === character.id
  })
  
  const characterStunts = foundCharacter.stunts.map(stunt => {
    return (
      <li key={stunt} className="align-left">{ stunt }</li>
      )
  })

  return (
    <main className="character-sheet">
      <section className="character-stats">
        <h1 className="character-name character-sheet-item-primary">{ foundCharacter.name }</h1>
        <div className="character-sheet-item-refresh">
          <h5 className="character-sheet-header refresh-header">Refresh</h5>
          <p className="refresh-stat">{ foundCharacter.refresh }</p>
        </div>
      </section>
      <section className="character-stats">
        <article className="character-sheet-item-primary">
          <CharacterStatBlock characterStatCategory="Aspects" characterStats={ foundCharacter.aspects } />
        </article>
        <article className="character-sheet-item-secondary">
          <CharacterStatBlock characterStatCategory="Approaches" characterStats={ foundCharacter.approaches } />
        </article>
      </section>
      <section className="character-stats">
        <article className="character-sheet-item-primary">
          <h5 className="character-sheet-header stunt-header">Stunts</h5>
          <ul className="stat-block">
            { characterStunts }
          </ul>
        </article>
      </section> 
      <section className="character-stats">
        <article className="character-sheet-item-primary">
          <CharacterStatBlock characterStatCategory="Consequences" characterStats={ foundCharacter.consequences } />
        </article>
      </section>
    </main>
  )
}
export default CharacterDetail
