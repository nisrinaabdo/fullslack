import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { matchPath } from 'react-router'

import './room.css'

class Room extends Component {
  render() {
    const {rootPath, data: { id, name } } = this.props
    const roomPath = `${rootPath}/${id}` //construction du chemin d'accès à la 'room'

    return (
      <li className="roomWrapper">
        <NavLink to={roomPath} activeClassName="selected">{name}</NavLink>
      </li>
    )
  }
}

export default Room
