import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitMessage } from '../../index';
import firebase from 'firebase';
import {sendMessage} from '../../index';
class MessageBox extends Component {


  state = {
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

    const message = {...this.state, user: this.props.uid}
    //console.log(this.state.user)
    //this.props.dispatch(submitMessage(this.state))
    sendMessage(message, this.props.idRoom)
    this.setState({messageBody: ''})
    sendMessage(this.state, this.props.idRoom)
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

export default connect(state => state.auth.user)(MessageBox);
