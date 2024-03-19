import React from 'react'
import Person from './Person'
//render list

function NameList() {
  
    const names = ['bruce', 'clark', ' Diana']
    const nameList = names.map(name =><p>{name}</p>)

    const persons =[
        {
            id: 1,
            name:'Bruce',
            age: 30,
        },
        {
            id: 2,
            name:'Clark',
            age: 15,
        },
        {
            id: 3,
            name:'Diana',
            age: 20,
        }
    ]

    const personList = persons.map(person =>(
        <Person person={person}/>
    )
    )
    return (
    <div>
      {nameList}
      {personList}
    </div>
  )
}

export default NameList
