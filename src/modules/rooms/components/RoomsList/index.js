import React, { Component } from 'react'
import './roomsList.css'
import Room from '../Room'

class RoomsList extends Component {
  render () {
    const { rooms } = this.props
    return (
      <div className='roomsListWrapper'>
        <ul>
          { (rooms && rooms.length) ? rooms.map(room => <Room data={room} />) : ''}
        </ul>
      </div>
    )
  }
}
export default RoomsList
