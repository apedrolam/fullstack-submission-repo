import React from 'react'
import Part from './Part.js'

const Content = ({ parts }) => {
  const elm = () => parts.map(part => 
    <Part key={part.id} part={part} />
  )

  const total = () => parts.reduce((s, p) => 
    s + p.exercises, 0
  )

  return (
    <div>
      {elm()}
      <p>total of <strong>{total()} exercises</strong></p>
    </div>
  )
}

export default Content;