import React, {useState} from 'react'

const Button = (props) => {
  return (
    <span>
      <button onClick={props.handleClick}>{props.text}</button>
    </span>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  })

  const showNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * ((anecdotes.length) - 0) + 0))
  }
  const voteAnecdote = () => {
    const copyPoints = {...points}
    copyPoints[selected] += 1
    setPoints(copyPoints)
  }

  return (
    <div>
      {anecdotes[selected]}
      <br/>
      <p>has {points[selected]} points</p>
      <Button handleClick={voteAnecdote} text="Vote" />
      <Button handleClick={showNextAnecdote} text="Next anecdote"/>
      <br></br>
      <br></br>
      {anecdotes[Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b)]} <br />
      has {Object.values(points).reduce((a, b) => a > b ? a : b)} votes <br />
    </div>
  )
}

export default App;
