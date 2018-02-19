import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFromFirebase } from '../../index';
import  Message  from '../Message';

class MessageList extends Component {

  componentDidMount() {
    const { dispatch, idRoom } = this.props;
    dispatch(fetchFromFirebase(idRoom))
  }

  render() {
    const { messages } = this.props;
    return (
    <div>
      { messages.map((msg, index) => <Message key={ index } {...msg}/> )}
    </div>
    )
  }
}

export default connect(
  state =>  state.chat
)(MessageList);
