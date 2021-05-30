import React, { useState } from 'react'

const History = (props) => {
  if(props.allClicks.length === 0) {
    return (
      <div>
        <p>There is no click yet</p>
      </div>
    )
  }
  return (
    <div>
      <p>{props.allClicks.join(' ')}</p>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  const [ clicks, setClicks ] = useState({
    left: 0,
    right:0
  })
  const [allClicks, setAll] = useState([])

  const handleLeftClicks = () => {
    setClicks({...clicks, left: clicks.left + 1})
    setAll(allClicks.concat('L'))
  }
  

  const handleRightClicks = () => {
    setClicks({...clicks, right: clicks.right + 1})
    setAll(allClicks.concat('R'))
  }
  
  
  return (
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClicks} text='Left' />
      <Button handleClick={handleRightClicks} text='Right' />
      {clicks.right}
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App