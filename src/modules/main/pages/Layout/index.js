import React, { Component } from 'react';
<<<<<<< HEAD
import { connect  } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

=======
import ChatList from '../../../chat/pages/ChatList'
>>>>>>> Fixes chat pagesetup
import './layout.css';

class Layout extends Component {
    render(){
        return (
<<<<<<< HEAD
            <Router>
                <div className="app-layout">
                    <header className="app-header">
                        <h1 className="app-title">Fullslack</h1>
                    </header>
                    <aside className="app-side">
                        { /* profile header & rooms list */ }
                    </aside>
                    <section className="app-main">
                        { /* routes, ex: current chat window, other pages */ }
                    </section>
                </div>
            </Router>
=======
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
>>>>>>> Fixes chat pagesetup
        );
    } 
}

export default connect()(Layout);