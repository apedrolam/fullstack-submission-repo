import React, { useState } from 'react'
//import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [filter, setFilter ] = useState('')

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
      <div>
          Filter: <input value={filter} onChange={handleFilterChange}/>
        </div>
      <h2>Add a new</h2>
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
