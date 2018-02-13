import React, { Component } from 'react';

class Message extends Component {
  render() {
    const { user, datetime, messageBody } = this.props;
    return (
      <div className="messageWrapper">
        <h4> { user } </h4> 
        <p> { datetime } </p>
        <p> { messageBody } </p>
      </div>
    )
  }
}

export default Message;
