import React, { Component } from 'react'
import { connect } from 'react-redux'

import './roomsManager.css'

import RoomsList from '../../components/RoomsList'
import CreateRoom from '../../components/CreateRoom'

import {updateList, createRoom} from '../../index'

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

  onCreateRoom = (room) => this.props.dispatch(createRoom(room))

  render () {
    const { listRooms } = this.props
    return (
      <div className='roomsManagerWrapper'>
        <CreateRoom creationCbk={this.onCreateRoom} />
        <RoomsList rooms={listRooms} />
      </div>
    )
  }
}

export default connect(
  state => state.rooms
)(RoomsManager)
