import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ChatList.css';
import MessageList from '../../components/MessageList'
import MessageBox from '../../components/MessageBox'
class ChatList extends Component {

    state={
        message:''
    }

    render(){

        return (<div className="wrapper">
        
       <MessageList/>
       <MessageBox/>
       
        
        </div>)
    }
}

export default connect(
    state => state.chat
)(ChatList);

