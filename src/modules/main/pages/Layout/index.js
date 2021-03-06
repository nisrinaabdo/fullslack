import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from '../../../auth/components/Login'
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
              <Route path='/' component={RoomsManager} />
            </aside>
            <section className="app-main">
              <Route path='/chat/:idRoom' component={ChatList} />
            </section>
            </div>
        )}
        {<Login/>}
        </div>
      </Router>
    );
  }
}

export default connect(
    state => ({
        auth: state.auth,
        users: state.users,
    })
)(Layout);
