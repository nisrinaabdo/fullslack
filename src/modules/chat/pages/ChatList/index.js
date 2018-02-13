import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ChatList.css';


class ChatList extends Component {

    state={
        message:''
    }

    render(){

        return (<div className="wrapper">
        
        test
        
        </div>)
    }
}

export default connect(
    state => state.chat
)(ChatList);

