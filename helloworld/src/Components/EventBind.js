import React, { Component } from 'react'

class EventBind extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'hello'
    }
    //bind  di bagian constructor
    // this.clickHandler = this.clickHandler.bind(this)
  }

//   clickHandler(){
//     //untuk mengubah state,pake set state
//     this.setState({
//         message:'goodbye'
//     })
//   }

//  mengubah metode function menggunakan arrow (=>)
    clickHandler =() =>{
        this.setState({
            message:'goodbye'
        })
    }
  

    render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
