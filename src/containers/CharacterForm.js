import React, { Component } from 'react'
import '../App.css'
import './CharacterForm.css'
import '../components/CharacterDetail.css'
import '../components/CharacterStatBlock.css'
import { withRouter } from 'react-router-dom'
import CharacterFormStatBlock from './CharacterFormStatBlock'
import StressBox from '../components/StressBox'

class CharacterForm extends Component {

  constructor(props){
    super(props)
    this.state={
      id:'',
      name:'',
      aspects: {
        highConcept:'',
        trouble:'',
        relationship: '',
        aspectOne: '',
        aspectTwo: ''
      },
      approaches: {
        careful: '',
        clever: '',
        flashy: '',
        forceful: '',
        quick: '',
        sneaky: ''
      },
      stunts: [],
      consequences: {
        mild: '',
        moderate: '',
        severe: ''
      },
      refresh : 3
    }
  }

  handleFormChange = (event) => {
    this.setState({ [event.target.id]:event.target.value })
  }

  handleFormStatChange = (event, characterStatGroup) => {
    const statGroup = this.state[characterStatGroup]
    statGroup[event.target.id] = event.target.value
    this.setState({characterStatGroup : statGroup})
  }

  handleStuntChange = (event) => {
    let existingStunts = this.state.stunts
    existingStunts[event.target.id] = event.target.value
    this.setState({ stunts:existingStunts })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const id = Date.now()
    const name = this.state.name.trim()
    const highConcept = this.state.aspects.highConcept.trim()
    const trouble = this.state.aspects.trouble.trim()
    const relationship = this.state.aspects.relationship.trim()
    const aspectOne = this.state.aspects.aspectOne.trim()
    const aspectTwo = this.state.aspects.aspectTwo.trim()
    const careful = this.state.approaches.careful.trim()
    const clever = this.state.approaches.clever.trim()
    const flashy = this.state.approaches.flashy.trim()
    const forceful = this.state.approaches.forceful.trim()
    const quick = this.state.approaches.quick.trim()
    const sneaky = this.state.approaches.sneaky.trim()
    const stunts = this.state.stunts
    const mild = this.state.consequences.mild.trim()
    const moderate = this.state.consequences.moderate.trim()
    const severe = this.state.consequences.severe.trim()
    const refresh = parseInt(this.state.refresh, 10)


    if(!name || !highConcept || !trouble || !relationship || !aspectOne || !aspectTwo){
      return
    }

    this.props.onCharacterCreated({
      id:id,
      name:name,
      aspects: {
        highConcept:highConcept,
        trouble:trouble,
        relationship: relationship,
        aspectOne: aspectOne,
        aspectTwo: aspectTwo
      },
      approaches: {
        careful: careful,
        clever: clever,
        flashy: flashy,
        forceful: forceful,
        quick: quick,
        sneaky: sneaky
      },
      stunts: stunts,
      consequences: {
        mild: mild,
        moderate: moderate,
        severe: severe
      },
      refresh : refresh
    })

    this.setState({
      id:'',
      name:'',
      aspects: {
        highConcept:'',
        trouble:''
      },
      approaches: {
        careful: '',
        clever: '',
        flashy: '',
        forceful: '',
        quick: '',
        sneaky: ''
      },
      stunts: [],
      consequences: {
        mild: '',
        moderate: '',
        severe: ''
      },
      refresh : 3
    })

    this.props.history.push('/')
  }

  render() {
    return (
      <main>
        <h1>Add a New Character</h1>
        <form autoComplete="off" className="character-sheet character-sheet-text" onSubmit={this.handleSubmit}>
          <section className="character-stats">
            <input 
              className="character-name character-sheet-item-primary character-name-input"
              type="text" 
              id="name" 
              placeholder="Character Name" 
              value={this.state.name}
              onChange={this.handleFormChange}
              required
            />
            <h5 className="refresh-form-header character-sheet-text character-sheet-item-secondary character-sheet-header">
              <label htmlFor="refresh">Refresh:</label>
              <input
                className="character-refresh-input"
                type="text"
                id="refresh"
                value={this.state.refresh}
                onChange={this.handleFormChange}
              />
            </h5>
          </section>
          <section className="character-stats">
            <article className="character-sheet-item-primary">
              <CharacterFormStatBlock stats={this.state.aspects} tableName="aspects" handleFormStatChange={this.handleFormStatChange} statBlockType="primary" />
            </article>
            <article className="character-sheet-item-secondary">
              <CharacterFormStatBlock stats={this.state.approaches} tableName="approaches" handleFormStatChange={this.handleFormStatChange} statBlockType="secondary" />
            </article>
          </section>
          <section className="character-stats">
            <article className="character-sheet-item-primary character-form-item-primary">
              <h5 className="character-sheet-header stunt-header character-sheet-text">Stunts</h5>
              <ul>
                <li>
                  <input 
                    className="primary-input character-sheet-text" 
                    type="text" 
                    placeholder="Stunt 1"
                    id="0"
                    value={this.state.stunts[0] || ''}
                    onChange={this.handleStuntChange}
                  />
                </li>
                <li>
                  <input 
                    className="primary-input character-sheet-text" 
                    type="text" 
                    placeholder="Stunt 2"
                    id="1"
                    value={this.state.stunts[1] || ''}
                    onChange={this.handleStuntChange}
                  />
                </li>
                <li>
                  <input 
                    className="primary-input character-sheet-text" 
                    type="text" 
                    placeholder="Stunt 3"
                    id="2"
                    value={this.state.stunts[2] || ''}
                    onChange={this.handleStuntChange}
                  />
                </li>
              </ul>
            </article>
          </section>
          <section className="character-stats">
            <article className="character-sheet-item-primary">
              <CharacterFormStatBlock stats={this.state.consequences} tableName="consequences" handleFormStatChange={this.handleFormStatChange} statBlockType="primary" />
            </article>
            <article className="character-sheet-item-secondary">
              <StressBox />
            </article>
          </section>
          <input className="primary-button" type="submit" value="Add Character"/>
        </form>
      </main>
    )
  }
}

export default withRouter(CharacterForm)