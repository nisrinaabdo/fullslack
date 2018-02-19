import React, { Component } from 'react';
import { connect } from 'react-redux';

import  Message  from '../Message';

class MessageList extends Component {
  render() {
    const { messages } = this.props;
    return (
    <div>
      { messages.map((msg) => <Message {...msg}/> )}
    </div>
    )
  }
}

export default connect(
  state =>  state.chat
)(MessageList);