import React, { Component } from 'react'
import './roomsList.css'
import { connect } from 'react-redux'

import {updateList} from '../../index'

class RoomsList extends Component {
  componentWillMount () {
    const { dispatch } = this.props
    const initialNames = ['aaa']
    dispatch(updateList(initialNames))
  }

  render () {
    const { names } = this.props
    return (
      <div className='wrapper'>
        <ul>
          { (names && names.length) ? names.map(name => <li>{name}</li>) : ''}
        </ul>
      </div>
    )
  }
}
export default connect(state => state.rooms)(RoomsList)
