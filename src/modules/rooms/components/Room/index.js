import React from 'react'
import './room.css'

function Room (props) {
  console.log(props)
  const { id, name } = props.data
  return (
    <li className='roomWrapper'>
      { name }
    </li>
  )
}

export default Room
