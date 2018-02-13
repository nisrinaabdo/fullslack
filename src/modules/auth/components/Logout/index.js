import React, {Component} from 'react';
import { connect } from 'react-redux';
import { githubLogout } from '../../index';

class Logout extends Component {
    logout = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(githubLogout())
    }
    render() {
        return (<div>
            <button onClick={this.logout}> Logout </button>
            </div>
        )
    }
}

export default connect()(Logout)