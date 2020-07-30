import React, { Component } from 'react'
import '../App.css'
import './CharacterForm.css'
import '../components/CharacterDetail.css'
import '../components/CharacterStatBlock.css'
import { withRouter } from 'react-router-dom'

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
      stunts: [''],
      consequences: {
        mild: '',
        moderate: '',
        severe: ''
      },
      refresh : 3
    }
  }

  handleNameChange = (event) => {
    this.setState({name:event.target.value})
  }

  handleFormChange = (event, characterStatGroup) => {
    const statGroup = this.state[characterStatGroup]
    statGroup[event.target.id] = event.target.value
    this.setState({characterStatGroup : statGroup})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const id = Date.now()
    const name = this.state.name.trim()
    const highConcept = this.state.aspects.highConcept.trim()
    const trouble = this.state.aspects.trouble.trim()

    if(!name || !highConcept || !trouble){
      return
    }

    this.props.onCharacterCreated({
      id:id,
      name:name,
      aspects: {
        highConcept:highConcept,
        trouble:trouble,
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
          <section className="character-stats character-form-section">
            <input 
              className="character-name character-sheet-item-primary character-name-input"
              type="text" 
              id="characterName" 
              placeholder="Character Name" 
              value={this.state.name}
              onChange={this.handleNameChange}
              required
            />
            <label htmlFor="refresh" className="refresh-form-header character-sheet-text">Refesh:</label>
            <input
              className="character-refresh-input"
              type="text"
              id="refresh"
            />
          </section>
          <section className="character-stats character-form-section">
            <table className="character-sheet-item-primary">
              <caption>Aspects</caption>
              <tbody>
                <tr>
                  <td className="stat-name">
                    <label htmlFor="highConcept">High Concept:</label>
                  </td>
                  <td className="form-input">
                    <input
                      className="character-sheet-text primary-input"
                      type="text" 
                      id="highConcept" 
                      placeholder="Make sure they sound banging!" 
                      value={this.state.aspects.highConcept}
                      onChange={(event) => this.handleFormChange(event, 'aspects')}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="stat-name">
                    <label className="form-label" htmlFor="trouble">Trouble:</label>
                  </td>
                  <td className="form-input">
                    <input
                      className="character-sheet-text primary-input"
                      type="text" 
                      id="trouble" 
                      placeholder="Make it dark and mysterious" 
                      value={this.state.aspects.trouble}
                      onChange={(event) => this.handleFormChange(event, 'aspects')}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="stat-name">
                    <label className="form-label" htmlFor="relationship">Relationship:</label>
                  </td>
                  <td className="form-input">
                    <input
                      className="character-sheet-text primary-input"
                      type="text" 
                      id="relationship" 
                      placeholder="Make sure they sound banging!" 
                      value={this.state.aspects.relationship}
                      onChange={(event) => this.handleFormChange(event, 'aspects')}
                      required
                    /> 
                  </td>
                </tr>
                <tr>
                  <td className="stat-name">
                    <label className="form-label" htmlFor="aspectOne">Aspect One:</label>
                  </td>
                  <td className="form-input">
                    <input
                      className="character-sheet-text primary-input"
                      type="text" 
                      id="aspectOne" 
                      placeholder="Make it dark and mysterious" 
                      value={this.state.aspects.aspectOne}
                      onChange={(event) => this.handleFormChange(event, 'aspects')}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="stat-name">
                    <label className="form-label" htmlFor="aspectTwo">Aspect Two:</label>
                  </td>
                  <td className="form-input">
                    <input
                      className="character-sheet-text primary-input"
                      type="text" 
                      id="aspectTwo" 
                      placeholder="Make it dark and mysterious" 
                      value={this.state.aspects.aspectTwo}
                      onChange={(event) => this.handleFormChange(event, 'aspects')}
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <input className="primary-button" type="submit" value="Add Character"/>
        </form>
      </main>
    )
  }
}

export default withRouter(CharacterForm)