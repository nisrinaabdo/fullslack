import React, { Component } from 'react'
import './roomsList.css'
import { connect } from 'react-redux'
import Room from '../Room'

import {updateList} from '../../index'

class RoomsList extends Component {
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
    const { list } = this.props
    return (
      <div className='wrapper'>
        <ul>
          { (list && list.length) ? list.map(room => <Room data={room} />) : ''}
        </ul>
      </div>
    )
  }
}
export default connect(state => state.rooms)(RoomsList)
