import React, { Component } from 'react';
import Greet from './Greet';

class State extends Component {
  constructor() {
    super();
    this.state = {
      message: "Heelo React !!",
    };
  }

  onClicked(props) {
    console.log(props)
    if (props != "Button Clicked") {
      this.setState({
        message: "Button Clicked",
      });
    } else {
        this.setState({
            message: "Heelo React !!",
        })
    }
  }

  render() {
    return (
      <>
        <div>
          {" "}
          <h1>{this.state.message}</h1>
          <button onClick={() => this.onClicked(this.state.message)}>
            Click Here
          </button>
          <Greet ></Greet>
        </div>
      </>
    );
  }
}

export default State