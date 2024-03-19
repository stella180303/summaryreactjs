import React, { Component } from 'react'

class ClassClick extends Component {
  
    clickHandler(){
        console.log('Clicked the button')
    }
  
    render() {
    return (
      <div>
        <p>Event handling lewat class component</p>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
