import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  const name1 = props.course.parts[0].name
  const exercises1 = props.course.parts[0].exercises
  const name2 = props.course.parts[0].name
  const exercises2 = props.course.parts[0].exercises
  const name3 = props.course.parts[0].name
  const exercises3 = props.course.parts[0].exercises

  return (
    <div>
        <p>
          {name1} {exercises1}
        </p>
        <p>
          {name2} {exercises2}
        </p>
        <p>
          {name3} {exercises3}
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const sum = (p1,p2,p3) => {
    return p1 + p2 + p3
  }
  const total = sum(course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises)

  const title = course.name

  return (
    <div>
      <Header name={title} />
      {/*<Content parts={course.parts.name1}/>*/}
      <Total total={total}/>
    </div>
  )
}

export default App;
