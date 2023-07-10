import React, { useContext } from 'react'
import { UserProvider, UserConsumer} from './userContext'

function UserLFHook() {

    const channel = useContext(UserConsumer)
  return (
    <h1> {channel}
    </h1>
  )
}

export default UserLFHook
