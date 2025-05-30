import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "welcome visior"
      }
    }
    changeMessage(){
        this.setState({
            message: "Thank you for subscribing"
        })
    }
  render() {
    return (
      <div><center><h1> {this.state.message} </h1>
      <button onClick={() =>this.changeMessage()}>subscribe</button>
      </center>
      </div>
    )
  }
}

export default Message