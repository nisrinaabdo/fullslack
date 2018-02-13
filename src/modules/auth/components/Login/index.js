import React, {Component} from 'react';
import { connect } from 'react-redux';
import { githubAuth, GITHUB_LOAD_USER, GITHUB_RESET_USER }  from '../../index'
import * as firebase from 'firebase';

class Login extends Component {
    auth = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(githubAuth())
    }
    render() {
        return (<div>
            <button onClick={this.auth}> Login </button>
             </div>
        )
    } 
    componentDidMount = () => {
        const { dispatch } = this.props
        firebase.auth().onAuthStateChanged(user => {
            user
            ? dispatch({type:GITHUB_LOAD_USER, user})
            : dispatch({type: GITHUB_RESET_USER})
        })
    }
}

export default connect()(Login)