import React, { Component } from 'react'

class UserGreeting extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  //conditional rendering
  
    render() {
        //if statement
        return this.state.isLoggedIn ?
        (
            <div>
                Welcome Stella
            </div>
        ) :
        (
            <div>
                Welcome Guest
            </div>
        )
     }
    }

export default UserGreeting
