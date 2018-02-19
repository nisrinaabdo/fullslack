import React, { Component } from 'react'
import { connect } from 'react-redux'

import './roomsManager.css'

import RoomsList from '../../components/RoomsList'
import CreateRoom from '../../components/CreateRoom'

import {fetchRooms, createRoom} from '../../index'

class RoomsManager extends Component {
  componentWillMount () {
    const { dispatch } = this.props
    dispatch(fetchRooms())
  }

  onCreateRoom = (room) => this.props.dispatch(createRoom(room))

  render () {
    const { listRooms } = this.props
    return (
      <div className='roomsManagerWrapper'>
        <CreateRoom creationCbk={this.onCreateRoom} />
        <RoomsList roomsData={listRooms} chatPath={'/chat'}/>
      </div>
    )
  }
}

export default connect(
  state => state.rooms
)(RoomsManager)
