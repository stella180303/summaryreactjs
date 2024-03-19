import React from 'react'
import Person from './Person'

function NameListKey() {
    const names = ['bruce', 'clark', ' Diana']
    const NameListKey = names.map(name =><p>{name}</p>)

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

    //key itu harus unik, biasanya yang dipakai adalah ID karna ID itu unik
    //key bisa berupa apa aja, bisa berupa nama, tapi harus UNIK
    //key tidak bisa diakses di child component (class component)
    
    const personList = persons.map(person =>(
        <Person key={person.id} person={person}/>
    )
    )
    return (
    <div>
      {NameListKey}
      {personList}
    </div>
  )
}

export default NameListKey
