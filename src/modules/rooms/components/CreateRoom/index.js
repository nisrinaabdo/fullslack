import React, { Component } from 'react'
import slugify from 'slugify'
import './createRoom.css'

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

  /*
    Handle form submitted data
  */
  handleSubmit = (event) => {
    //Prevent default behaviour
    event.preventDefault()

    //Send data the reducer
    if (event) {
      const target = event.target

      //Process room name value
      const roomId = slugify(target.name.value, {
        replacement: '-',
        remove: /[$*_+~.()'"!;?{}/:@]/g,
        lower: true
      })

      const newRoom = {
        id: roomId,
        name: target.name.value,
        description: target.description.value.trim()
      }

      //Use callback passed as parameters with room object
      this.props.creationCbk(newRoom)

      //Seg local stat to trigger local rendering
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
