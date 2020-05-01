import React, { Component } from 'react'
import './CharacterForm.css'

export default class CharacterForm extends Component {

  constructor(props){
    super(props)
    this.state={
      name:'',
      highConcept:'',
      trouble:''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleHighConceptChange = this.handleHighConceptChange.bind(this)
    this.handleTroubleChange = this.handleTroubleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event){
    this.setState({name:event.target.value})
  }

  handleHighConceptChange(event){
    this.setState({highConcept:event.target.value})
  }

  handleTroubleChange(event){
    this.setState({trouble:event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.onCharacterCreated(this.state)

    this.setState({
      name:'',
      highConcept:'',
      trouble:''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="characterName">Character Name:</label>
          <input 
            type="text" 
            id="characterName" 
            placeholder="Make sure they have a cool name" 
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />
        <label htmlFor="characterConcept">High Concept:</label>
          <input 
            type="text" 
            id="characterConcept" 
            placeholder="Make sure they sound banging!" 
            value={this.state.highConcept}
            onChange={this.handleHighConceptChange}
            required
          />  
        <label htmlFor="characterTrouble">Trouble:</label>
          <input 
            type="text" 
            id="characterTrouble" 
            placeholder="Make it dark and mysterious" 
            value={this.state.trouble}
            onChange={this.handleTroubleChange}
            required
          />  
        <input type="submit" value="Add Character"/>
      </form>
    )
  }
}
