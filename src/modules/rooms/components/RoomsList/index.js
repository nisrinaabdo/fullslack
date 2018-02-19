import React, { Component } from 'react'
import './roomsList.css'
import Room from '../Room'

class RoomsList extends Component {
  render () {
    const { roomsData, chatPath } = this.props

    return (
      <div className='roomsListWrapper'>
        <ul>
          { (roomsData && roomsData.length) ? roomsData.map(room => <Room rootPath={chatPath} data={room} key={room.id} />) : ''}
        </ul>
      </div>
    )
  }
}
export default RoomsList
