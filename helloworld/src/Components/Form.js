import React, { Component } from 'react'


//form sederhana

class Form extends Component {
  
  
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: ''
      }
    }
    
    handlerUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlerCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }
    

    handlerTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handlerSubmit = event => {
      alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
      event.preventDefault(); //biar abis disubmit ga langsung ilang
    }


    render() {
    
    const {username, comments, topic} = this.state

    return (
      <div>
        Form Component

        <form onSubmit={this.handlerSubmit}>
            <div>
            <label>Username</label>
            <input type='text' value={username} onChange={this.handlerUsernameChange} />
            </div>

            <div>
                <label>Comments</label>
                <textarea value={comments} onChange={this.handlerCommentsChange} />
            </div>

            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.handlerTopicChange}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                </select>
            </div>

            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
