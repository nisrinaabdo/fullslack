import React, { Component } from 'react'
import './roomsList.css'
import { connect } from 'react-redux'

class RoomsList extends Component {
  render () {
    const { names } = this.props
    return (
      <div className='wrapper'>
        <ul>
          { (names && names.length) ? names.map(name => <li>name</li>) : ''}
        </ul>
      </div>
    )
  }
}
export default connect(state => state.names)(RoomsList)
