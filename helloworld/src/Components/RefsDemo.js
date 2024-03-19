import React, { Component } from 'react'

class RefsDemo extends Component {
  
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
      //cbReff ->  call backrefs
      this.cbRef = null
      this.setcbRef = (element) => {
        this.cbRef = element
      }
    
    }
    
    componentDidMount() {
        
        if(this.cbRef) {
            this.cbRef.focus()
        }
        
        // //current focus itu biar kalo di run webnya langsung focus ke field yang harus diisi
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }


    render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} /> 
        <input type='text' ref={this.setcbRef} /> 
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
