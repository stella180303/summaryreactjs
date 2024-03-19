import React, { Component } from 'react'
import RegComp from './RegComp'
import Purecomponent from './Purecomponent'
import MemoComp from './MemoComp'

class ParentComp extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Stella'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Stella'
            })
        }, 2000)
    }
    
  
    render() {
    console.log('+++++++++++++++++Parent Comp Render++++++++++++++')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} />
        <Purecomponent name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp
