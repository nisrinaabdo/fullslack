import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitMessage } from '../../index';

class MessageBox extends Component {

  state = {
    user: 'toto',
    messageBody: '',
    datetime:''
  }

  setDatetime() {
    const d = new Date()
    return `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
  }
  // 13-02-2018 16:54:55

  onSubmitMessage = (e) => {
    // e.preventDefault();
    this.state.datetime = this.setDatetime()
    this.props.dispatch(submitMessage(this.state))
    this.setState({messageBody: ''})
  }

  handleKeyPress = (e) => {
    if(e.key == 'Enter' && this.state.messageBody !== ''){
      this.onSubmitMessage()
    }
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
          onKeyPress={this.handleKeyPress}
        />
        <button
          type='submit'
          onClick={ this.onSubmitMessage }
          style={{ width: '10%' }}
          > send </button>
      </div>
    )
  }
}

export default connect()(MessageBox);
