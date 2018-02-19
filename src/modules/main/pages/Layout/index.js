import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
<<<<<<< HEAD

import Login from '../../../auth/components/Login'
import Logout from '../../../auth/components/Logout'
import Profile from '../../../auth/components/Profile'
import RoomsManager from '../../../rooms/pages/RoomsManager'
import ChatList from '../../../chat/pages/ChatList'

import './layout.css';

class Layout extends Component {
  render() {

    const { user } = this.props.auth

    return (
        <Router>
            <div>
        {user && (
            <div className="app-layout">
            <header className="app-header">
                <h1 className="app-title">Fullslack</h1>
                <Profile />
            </header>
            <aside className="app-side">
                <RoomsManager />
            </aside>
            <section className="app-main">
              <ChatList/>
            </section>
            </div>
        )}
        {<Login/>}
        </div>
      </Router>
    );
  }
=======
import ChatList from '../../../chat/pages/ChatList'
import './layout.css';

class Layout extends Component {
    render(){
        return (
            <Router>
                <div className="app-layout">
                    <header className="app-header">
                        <h1 className="app-title">Fullslack</h1>
                    </header>
                    <aside className="app-side">

                    </aside>
                    <section className="app-main">
                        <ChatList/>
                        
                    </section>
                </div>
            </Router>
        );
    } 
>>>>>>> e09e74c51de52fb939ee4f8eb5fb07300c995f0b
}

export default connect(
    state => ({
        auth: state.auth
    })
)(Layout);
