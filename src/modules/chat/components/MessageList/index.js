import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMessages } from '../../index';
import  Message  from '../Message';

class MessageList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    const idRoom = this.props.idRoom;
    dispatch(fetchMessages(idRoom))
    console.log(`idRoom : ${idRoom}`)

  }

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
