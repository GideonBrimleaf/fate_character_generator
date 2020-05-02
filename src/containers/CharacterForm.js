import React, { Component } from 'react'
import './CharacterForm.css'
import { withRouter } from 'react-router-dom'

class CharacterForm extends Component {

  constructor(props){
    super(props)
    this.state={
      id:'',
      name:'',
      highConcept:'',
      trouble:''
    }
  }

  handleNameChange = (event) => {
    this.setState({name:event.target.value})
  }

  handleHighConceptChange = (event) => {
    this.setState({highConcept:event.target.value})
  }

  handleTroubleChange = (event) => {
    this.setState({trouble:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const id = Date.now()
    const name = this.state.name.trim()
    const highConcept = this.state.highConcept.trim()
    const trouble = this.state.trouble.trim()

    if(!name || !highConcept || !trouble){
      return
    }

    this.props.onCharacterCreated({
      id:id,
      name:name,
      highConcept:highConcept,
      trouble:trouble
    })

    this.setState({
      name:'',
      highConcept:'',
      trouble:''
    })
    this.props.history.push('/')
  }

  render() {
    return (
      <section>
        <h1>Add a New Character</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="characterName">Character Name</label>
            <input 
              type="text" 
              id="characterName" 
              placeholder="Make sure they have a cool name" 
              value={this.state.name}
              onChange={this.handleNameChange}
              required
            />
          <label htmlFor="characterConcept">High Concept</label>
            <input 
              type="text" 
              id="characterConcept" 
              placeholder="Make sure they sound banging!" 
              value={this.state.highConcept}
              onChange={this.handleHighConceptChange}
              required
            />  
          <label htmlFor="characterTrouble">Trouble</label>
            <input 
              type="text" 
              id="characterTrouble" 
              placeholder="Make it dark and mysterious" 
              value={this.state.trouble}
              onChange={this.handleTroubleChange}
              required
            />  
          <input className="form-submit" type="submit" value="Add Character"/>
        </form>
      </section>
    )
  }
}

export default withRouter(CharacterForm)