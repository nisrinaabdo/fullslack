import React, { Component } from 'react'
import './createRoom.css'

import createRoom from '../../index'

class CreateRoom extends Component {
  constructor (props){
    super(props)
    this.state={
      formActive: false
    }

    this.showForm = this.showForm.bind(this)
    this.showAddButton = this.showAddButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  displayAddButton = () => {
    return (
      <button onClick={this.showForm}>Add</button>
    )
  }

  showForm = (event) => {
    event.preventDefault()
    this.setState({formActive: true})
  }

  displayForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" required/>
        <input type="submit" value="OK" />
        <button onClick={this.showAddButton}>CANCEL</button>
      </form>
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newRoom = {
      name: event.target.name.value
    }
    this.props.creationCbk(newRoom)
  }

  showAddButton = (event) => {
    event.preventDefault()
    this.setState({formActive: false})
  }

  render () {
    return (
      <div className='createRoomWrapper'>
        {this.state.formActive ? this.displayForm() : this.displayAddButton()}
      </div>
    )
  }
}
export default CreateRoom
