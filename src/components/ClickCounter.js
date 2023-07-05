import React, { Component } from 'react'
import HigherOreder from './HigherOreder'

export class ClickCounter extends Component {
    
    
  render() {
    const {count, incrementCount} = this.props
    return (<button onClick={incrementCount} >{this.props.name} Clicked {this.props.count} </button>
    )
  }
}

export default HigherOreder(ClickCounter)
