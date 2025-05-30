import React, { Component } from 'react'

export class Great extends Component {
  render() {
    return (
      <div>

        <h1> Welcome to Class components {this.props.name} with id {this.props.id} </h1>
      </div>
    )
  }
}

export default Great