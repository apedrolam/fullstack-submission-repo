import React from 'react'
import Part from './Part.js'

const Content = ({ parts }) => {
  const rows = () => parts.map(part =>
    <Part
      key={part.id}
      part={part}
    />
  )

  const total = () => parts.reduce((s, p) =>
    s + p.exercises, 0
  )
  
  return (
    <div>
      {rows()}
      <p><b>total of {total()} exercises</b></p>
    </div>
  )
}

export default Content;