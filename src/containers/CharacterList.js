import React, { Component } from 'react'

export default class CharacterList extends Component {

  constructor(props){
    super(props)
    this.state = {
      characters:[]
    }
  }

  render() {
    return (
      <div>
        <h3>This is where the characters will go</h3>
      </div>
    )
  }
}
