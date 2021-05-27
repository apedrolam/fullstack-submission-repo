import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        <p>
          {props.parts[0].name} {props.parts[0].exercises}
        </p>
        <p>
          {props.parts[1].name} {props.parts[1].exercises}
        </p>
        <p>
          {props.parts[2].name} {props.parts[2].exercises}
        </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ]

  const sum = (p1,p2,p3) => {
    return p1 + p2 + p3
  }
  const total = sum(parts[0].exercises, parts[1].exercises, parts[2].exercises)



  return (
    <div>
      <Header name={course} />
      <Content parts={parts}/>
      <Total total={total}/>
    </div>
  )
}

export default App;
