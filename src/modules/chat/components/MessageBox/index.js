import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitMessage } from '../../index';

class MessageBox extends Component {

  state = {
    user: 'toto',
    messageBody: '',
    datetime:''
  }
  
  onSubmitMessage = (e) => {
    e.preventDefault();
    this.state.datetime = new Date.now()
    this.props.dispatch(submitMessage(this.state))
  }
  
  render() {
    const { messageBody } = this.state;
    return (
      <div className="messageBox">
        <input
          type='text'
          value={ messageBody }
          placeholder='Put your text here'
        />
        <button
          id='mesage-box-button'
          type='submit'
          onclick={ this.onSubmitMessage }
          > Send ! </button>
      </div>
    )
  }
}

export default connect(
  state => state.messageBox
)(MessageBox);