import React, { Component } from 'react';

class messageBox extends Component {
  submitMessage = (e) => {
    e.preventDefault()


  }
  
  render() {
    return (
      <div className="messageBox">
        <input
          id='message-box-body'
          value={ messageBody }
          placeholder='Put your text here'
        />
        <button
          id='mesage-box-button'
          type='submit'
          onclick={ this.submitMessage}
          > Send ! </button>
      </div>
    )
  }
}

export default messageBox;