import React, {Component} from 'react';
import { connect } from 'react-redux';
import { githubAuth }  from '../../index'

class Login extends Component {
    auth = (e) => {
        githubAuth()
    }
    render() {
        return <div>
            <button onClick={auth}> Login </button>
             </div>
    } 
}

export default connect(Login)