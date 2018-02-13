import React, { Component } from 'react'
import { connect } from 'react-redux'

import './roomsManager.css'

import RoomsList from '../../components/RoomsList'
import CreateRoom from '../../components/CreateRoom'

import {updateList} from '../../index'

class RoomsManager extends Component {
  componentWillMount () {
    const { dispatch } = this.props
    const initialList = [
      {
        id: 0,
        name: 'aaa',
        description: 'a room',
        users: []
      }
    ]
    dispatch(updateList(initialList))
  }

  render () {
    const { listRooms } = this.props
    return (
      <div className='roomsManagerWrapper'>
        <CreateRoom />
        <RoomsList rooms={listRooms} />
      </div>
    )
  }
}

export default connect(
  state => state.rooms
)(RoomsManager)
