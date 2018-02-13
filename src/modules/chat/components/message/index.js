import React, { Component } from 'react';

class message extends Component {
  render() {
    const { user, datetime, body } = this.props;
    return (
      <div className="messageWrapper">
        <h4> { user } </h4> <p> { datetime } </p><br>
        <p> { body} </p>
      </div>
    )
  }
}

export default message;