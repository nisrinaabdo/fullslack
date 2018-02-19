import React, { Component } from 'react'
import slugify from 'slugify'
import './createRoom.css'

import createRoom from '../../index'

class CreateRoom extends Component {
  constructor (props){
    super(props)
    this.state={
      formActive: false,
      roomName: ''
    }

    this.showForm = this.showForm.bind(this)
    this.showAddButton = this.showAddButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRoomNameChange = this.handleRoomNameChange.bind(this)
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
    const { roomName } = this.state
    return (
      <div id="addFormWrapper">
        <span>Add new chat-room:</span>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={ this.handleRoomNameChange } value={ roomName } required/>
          <input type="text" name="description" placeholder="Description"/>
          <input type="submit" className="btn btn-ok" value="OK" />
          <button onClick={this.showAddButton} className="btn btn-cancel">CANCEL</button>
        </form>
      </div>
    )
  }

  /*
    Process room name while changing
  */
  handleRoomNameChange = (event) => {
    let currentName = event.target.value

    //Replace last char if space as hyphen
    if (currentName !== '') {
      const lastChar = currentName.substr(currentName.length - 1)
      if (lastChar === ' ') {
        currentName = currentName.substr(0, currentName.length - 1) + '-'
      }
    }

    //Transform to "slug" the current room name
    const newName = slugify(currentName, {
      replacement: '-',
      remove: /[$*_+~.()'"!;?{}/:@]/g,
      lower: true
    })

    //Re-render the componant due to local changes
    this.setState({ roomName: newName})
  }

  /*
    Handle form submitted data
  */
  handleSubmit = (event) => {
    //Process room name value (local state)
    let roomName = this.state.roomName.trim()
    const lastChar = roomName.substr(roomName.length - 1)
    const proceedRoomName = (lastChar === '-') ? roomName.substr(0, roomName.length - 1) : roomName

    //Prevent default behaviour
    event.preventDefault()

    //Send data the reducer
    if (event) {
      const target = event.target
      const newRoom = {
        name: proceedRoomName,
        description: target.description.value.trim()
      }
      //Use callback passed as parameters with room object
      this.props.creationCbk(newRoom)

      //Seg local stat to trigger local rendering
      this.setState({formActive: false, roomName: ''})
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
