import React, { Component } from 'react'
import Logout from '../Logout'
import EditProfile from '../EditProfile'
import { connect } from 'react-redux'
import './profile.css'

class Profile extends Component {
    render() {
        const { user } = this.props.auth
        return (
            <div className="profile">
                <img src={user.photoURL} className="img-profile" alt={user.displayName} />
                <div className="profile-data">
                    {user.email}
                    <Logout />
                    <EditProfile />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        auth: state.auth
    })
)(Profile)
