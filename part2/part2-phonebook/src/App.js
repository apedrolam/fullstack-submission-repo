import React, { useState } from 'react'
//import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { 
      name: 'Arto Hellas', 
      phone: '343-1948392391234'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      phone: newPhone
    }

    const person_names = persons.map(person => person.name)
    if(person_names.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(personObj))
    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const displayPerson = () => persons.map(person => 
    <li key={person.name}>{person.name} - {person.phone}</li>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Phone: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {displayPerson()}
      </ul>
    </div>
  )
}

export default App
