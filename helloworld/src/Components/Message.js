import React, {Component} from 'react'


//class component
class Message extends Component {
    
    constructor(){
        super()
        this.state = {
            Message: 'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            Message: 'Thank u  For Subscribe'
        })

    }

    render(){
       return(
        <div>
            <h1>{this.state.Message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
       ) 
    }
}

export default Message