import React, {Component} from 'react';
import { connect } from 'react-redux';
import { editUserProfile } from '../../../users'

class EditProfile extends Component {
  constructor() {
    super()
    this.state = {
      modal:false,
      inputValue: '',
    }
  }

  displayModal = (e) => {
      this.setState({modal:true})
  }

  updateName = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  editName = (e) => {
    e.preventDefault()
    const { user } = this.props.auth
    const { dispatch } = this.props
    dispatch(editUserProfile(user, this.state.inputValue))

  }

  render() {
    const { modal } = this.state
      return (
        <div>

          {modal &&
          (<div className="modal">
          Name :
          <input type="text" value={this.state.inputValue} onChange={this.updateName}/>
          <button type="submit" onClick={this.editName}>Submit</button>
          </div>)}

          <button onClick={this.displayModal}> Edit </button>

        </div>
      )
  }
}

export default connect(
  (state) => ({
    auth: state.auth,
  })
)(EditProfile)
