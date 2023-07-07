import React, { useState } from 'react'


function UserState1() {

    const [name, setName] = useState({firstName: "", lastName:""});
  return (
   <form>
    <input  type='text' value={name.firstName} onChange={e=> setName({... name,firstName : e.target.value})} />
    <input  type='text' value={name.lastName} onChange={e=> setName({... name,lastName : e.target.value})} />
    <h2>Name : {name.firstName}  {name.lastName}</h2>
   </form>
  )
}

export default UserState1
