import React, { Component } from 'react'
//import Display from 'react'
//import Restaurant from './Restaurant'
//import Instructions from './Instructions'

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {count: props.count}
  }

  handleIncrement = () => {
    this.setState((prevState) => ({count: prevState.count + 1}));
  }
  
  handleDecrement = () => {
    this.setState((prevState) => ({count: prevState.count - 1}));
  }
  
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }

}

export default Counter