import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

//Methods as Props

class ParentComponent extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }
    
    //buat function greetparent untuk munculin alert
    greetParent(){
        alert(`Hello ${this.state.parentName}`)
    }
  
    render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
