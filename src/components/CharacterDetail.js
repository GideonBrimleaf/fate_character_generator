import React from 'react'
import './CharacterDetail.css'

const CharacterDetail = (props) => {

  const foundCharacter = props.characters.find(character => {
    return parseInt(props.match.params.characterId) === character.id
  })
  
  const characterStunts = foundCharacter.stunts.map(stunt => {
    return (<li key={stunt}>{ stunt }</li>)
  })

  return (
    <main className="character-sheet">
      <section className="character-stats">
        <h1 className="character-name character-sheet-item-primary">{ foundCharacter.name }</h1>
        <article className="character-sheet-item-secondary">
          <h5>Refresh</h5>
          <p>{ foundCharacter.refresh }</p>
        </article>
      </section>
      <section className="character-stats">
        <article className="character-sheet-item-primary">
          <h5>Aspects</h5>
          <ul className="stat-block">
            <li>{ foundCharacter.highConcept }</li>
            <li>{ foundCharacter.trouble }</li>
            <li>{ foundCharacter.relationship }</li>
            <li>{ foundCharacter.aspectOne }</li>
            <li>{ foundCharacter.aspectTwo }</li>
          </ul>
        </article>
        <article className="character-sheet-item-secondary">
          <h5>Approaches</h5>
          <ul className="stat-block">
            <li>Careful: { foundCharacter.approaches.careful }</li>
            <li>Clever: { foundCharacter.approaches.clever }</li>
            <li>Flashy: { foundCharacter.approaches.flashy }</li>
            <li>Forceful: { foundCharacter.approaches.forceful }</li>
            <li>Quick: { foundCharacter.approaches.quick }</li>
            <li>Sneaky: { foundCharacter.approaches.sneaky }</li>
          </ul>
        </article>
      </section>
      <section className="character-stats">
        <article className="character-sheet-item-primary">
          <h5>Stunts</h5>
          <ul className="stat-block">
            { characterStunts }
          </ul>
        </article>
      </section>
      <section className="character-stats">
        <article className="character-sheet-item-primary">
          <h5>Consequences</h5>
          <ul className="stat-block">
            <li>Mild: { foundCharacter.consequences.mild }</li>
            <li>Moderate: { foundCharacter.consequences.moderate }</li>
            <li>Severe: { foundCharacter.consequences.severe }</li>
          </ul>
        </article>
      </section>
    </main>
  )
}
export default CharacterDetail
