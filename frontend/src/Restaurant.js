import React, { Component } from 'react'
//import Display from 'react'
//import App from './App'
import Counter from './Counter'

class Restaurant extends Component {

  constructor(props) {
    super(props)
    this.state = {id: 0, name: '', rating: 0}
  }
  
  render() {
    return (
      <div>
      {this.props.name}
      <Counter count={this.props.rating} />
      </div>
    )
  }
}

export default Restaurant
