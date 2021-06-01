import React from 'react'

const Person = ({ persons }) => {
    return (
        <li>{persons.name}</li>
    )
}

export default Person;