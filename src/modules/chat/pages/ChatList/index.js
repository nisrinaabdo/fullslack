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
        console.log(this.props.match.params.idRoom)
        return (<div className="wrapper">

       <MessageList idRoom={this.props.match.params.idRoom}/>
       <MessageBox  idRoom={this.props.match.params.idRoom}/>


        </div>)
    }
}

export default connect(
    state => state.chat
)(ChatList);

