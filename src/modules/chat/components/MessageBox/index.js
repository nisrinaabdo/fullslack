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
  
  onInput = (e) => {
    this.setState({ messageBody: e.target.value });
  }

  render() {
    const { messageBody } = this.state;
    return (
      <div className="messageBox">
        <input
          type='text'
          value={ messageBody }
          onChange={this.onInput}
          placeholder='Put your text here'
          style={{ width: '90%' }}
        />
        <button
          type='submit'
          onclick={ this.onSubmitMessage }
          style={{ width: '10%' }}
          > Send ! </button>
      </div>
    )
  }
}

export default connect(
  state => state.messageBox
)(MessageBox);