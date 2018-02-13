import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
}

export default connect()(Layout);