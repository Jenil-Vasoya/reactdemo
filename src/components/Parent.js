import React, { Component } from 'react'
import Child from './Child'

 class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            name: "Parent"
      }
      this.getParent = this.getParent.bind(this)
    }

    getParent()
    {
        alert('hello ' +this.state.name)
    }
    
  render() {
    return (
      <div>
        <Child greetHandler={this.getParent}/>
      </div>
    )
  }
}

export default Parent
