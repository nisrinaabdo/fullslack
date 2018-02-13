import React, { Component } from 'react'
//import { connect } from 'react-redux'
import './createRoom.css'

class CreateRoom extends Component {
  constructor (props){
    super(props)
    this.state={
      formActive: false
    }

    this.showForm = this.showForm.bind(this)
    this.showAddButton = this.showAddButton.bind(this)
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
      <form onSubmit={this.handleCreation}>
        <input type="text" name="name" />
        <input type="submit" value="OK" />
        <button onClick={this.showAddButton}>CANCEL</button>
      </form>
    )
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
