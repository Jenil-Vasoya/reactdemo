import React, { Component } from 'react'
import {UserConsumer} from './userContext'

 class UserLF extends Component {
  render() {
    return (
      <UserConsumer>
        {  (username) => {
                return <h1>What {username}</h1>
            }
        }
      </UserConsumer>
    )
  }
}

export default UserLF
