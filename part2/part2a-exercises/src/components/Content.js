import React from 'react'
import Part from './Part.js'

const Content = ({ parts }) => {
  const elm = () => parts.map(part => 
    <Part key={part.id} part={part} />
  )
  return (
    <div>
      {elm()}
    </div>
  )
}

export default Content;