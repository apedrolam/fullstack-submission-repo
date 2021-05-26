import React from 'react'

const Hello = (props) => {
  return (
    <p>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </p>
  )
}

const App = () => {
  const name = "Mafer"
  const age = 31
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Albert" age={10+20}/>
      <Hello name={name} age={age} />
    </div>
  )
}

export default App