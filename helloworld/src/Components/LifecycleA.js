import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Stella'
      }
      console.log('LifecycleA Constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
  
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
    

    changeState = () => {
        this.setState({
            name: 'Viswash'
        })
    }

    render() {

        console.log('LifecycleA render')

        return (
        <div>
            LifecycleA <br></br>
            <button onClick={this.changeState}>
                Change State
            </button>
        </div>
        )
  }
}

export default LifecycleA
