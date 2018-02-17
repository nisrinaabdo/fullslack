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
      <div id="addButtonWrapper">
        <span>Rooms</span><button onClick={this.showForm} className="btn btn-add">Add</button>
      </div>
    )
  }

  showForm = (event) => {
    event.preventDefault()
    this.setState({formActive: true})
  }

  displayForm = () => {
    return (
      <div id="addFormWrapper">
        <span>Add new chat-room:</span>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" required/>
          <input type="text" name="description" placeholder="Description"/>
          <input type="submit" className="btn btn-ok" value="OK" />
          <button onClick={this.showAddButton} className="btn btn-cancel">CANCEL</button>
        </form>
      </div>
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (event) {
      const target = event.target
      const newRoom = {
        name: target.name.value.trim(),
        description: target.description.value.trim()
      }
      this.props.creationCbk(newRoom)
      this.setState({formActive: false})
    }
  }

  showAddButton = (event) => {
    event.preventDefault()
    this.setState({formActive: false})
  }

  render () {
    return (
      <div id='createRoomWrapper'>
        {this.state.formActive ? this.displayForm() : this.displayAddButton()}
      </div>
    )
  }
}
export default CreateRoom
