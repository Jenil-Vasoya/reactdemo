import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [{id:1, name:'Demo1'},{id:2, name:'Demo2'},{id:3, name:'Demo3'}]

    const personlist = persons.map(person => <Person key={person.id} person={person}/>)
  return(
    <div>
      {personlist}
    </div>
  )
}

export default NameList
