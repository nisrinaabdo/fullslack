import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
                        { /* profile header & rooms list */ }
                    </aside>
                    <section className="app-main">
                        { /* routes, ex: current chat window, other pages */ }
                    </section>
                </div>
            </Router>
        );
    } 
}

export default connect()(Layout);