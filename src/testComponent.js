import React, { Component } from 'react';

class SomeComponent extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 8
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({a: "Fdfd"})
  }
  
  render() {
    return(
      <div>
        <button onClick={this.handleClick}>sss</button>
        <p>{this.state.a}</p>
      </div>
    
    )
  }
  
}

export default SomeComponent;