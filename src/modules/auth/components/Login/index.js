import React, {Component} from 'react';
import { connect } from 'react-redux';
import { githubAuth }  from '../../index'
import { changeUserAuthState }  from '../../../users'
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
        firebase.auth().onAuthStateChanged(user => dispatch(changeUserAuthState(user)))
        /*
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(fetchUsers())
                    .then((data) => {
                        if (data.list[user.uid] === undefined) {
                            dispatch(addUser(user))
                        }
                        dispatch({ type:GITHUB_LOAD_USER, user })
                    })
            } else {
                dispatch({ type: GITHUB_RESET_USER })
            }
        })
        */
    }
}

export default connect(
    (state) => ({
        auth: state.auth,
        users: state.users
    })
)(Login)