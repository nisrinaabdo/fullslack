import React, { Component } from 'react';

class Message extends Component {

  render() {
    const { user, datetime, messageBody } = this.props;
    return (
      <div className="messageWrapper">
        <b> { user } </b>
        <i> { datetime } </i>
        <p> { messageBody } </p>
      </div>
    )
  }
}

export default Message;
