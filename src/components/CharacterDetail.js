import React from 'react'
import './CharacterDetail.css'
import CharacterStunt from './CharacterStunt'

const CharacterDetail = (props) => {

  const foundCharacter = props.characters.find(character => {
    return parseInt(props.match.params.characterId) === character.id
  })

  const characterStunts = foundCharacter.stunts.map(stunt => {
    return(
      <CharacterStunt characterStunt={stunt} key={stunt} />
    )
  })

  return (
    <main className="character-sheet">
      <h1>{ foundCharacter.name }</h1>
      <section className="character-stats">
        <article>
          <h5>Refresh</h5>
          <p>{ foundCharacter.refresh }</p>
        </article>
        <article>
          <h5>Aspects</h5>
          <ul className="stat-block">
            <li>{ foundCharacter.highConcept }</li>
            <li>{ foundCharacter.trouble }</li>
            <li>{ foundCharacter.relationship }</li>
            <li>{ foundCharacter.aspectOne }</li>
            <li>{ foundCharacter.aspectTwo }</li>
          </ul>
        </article>
        <article>
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
        <article>
          <h5>Stunts</h5>
          <ul className="stat-block">
            { characterStunts }
          </ul>
        </article>
        <article>
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
