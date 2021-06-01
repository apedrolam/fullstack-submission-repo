import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filterNames = filter === '' ? persons : persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase()))

  const displayPerson = () => filterNames.map(person => 
    <li key={person.name}>{person.name} - {person.phone}</li>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filter={filter} 
        handleFilterChange={handleFilterChange}
      />
      <h2>Add a new</h2>
      <PersonForm 
        onSubmit={addPerson} 
        newName={newName} 
        newPhone={newPhone} 
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <ul>
        <Person func={displayPerson()}/>
      </ul>
    </div>
  )
}

export default App
