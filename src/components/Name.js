import React from 'react'

function Name({name}) {
    if(name === "name")
    {
        throw new Error("name is not allow as a name")
    }
  return (
    <div>
      {name}
    </div>
  )
}

export default Name
