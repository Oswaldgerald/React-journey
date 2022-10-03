import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Oswad',
            age: 30,
            skill: 'Angular'
          },
          
            {
            id: 2,
            name: 'Jane',
            age: 37,
            skill: 'React'
          },
           {
            id: 3,
            name: 'Azad',
            age: 63,
            skill: 'Law'
          },
          {
            id: 4,
            name: 'Bennet',
            age: 63,
            skill: 'Kurbenetes'
          }
    ]
    const names = ['Oswald','James','Harron','James']
    const nameList = names.map((name,index)=><h2 key = {index}>{index} {name}</h2>)
    // const personList = persons.map(person => <Person  key={person.name} person={person}/>)
    // return <div>{personList}</div> 
    return <div>{nameList}</div>
}


export default NameList
