import React, {useState} from 'react';

const Button = (props) => {
  return (
    <span>
      <button onClick={props.handleClick}>{props.text}</button>
    </span>
  )
}

const Statistics = (props) => {
  /*if (props.value === 0 || props.value === '0 %' ) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }*/
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const [ feedback, setFeedback ] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0
  })

  const handleGoodClick = () => {
    setFeedback({...feedback, 
      good: feedback.good + 1, 
      all: feedback.all + 1,
      average: feedback.average + 1 / 10,
      positive: ((feedback.good +1) / (feedback.all +1)) * 100
    })
  }
  const handleBadClick = () => {
    setFeedback({...feedback, 
      bad: feedback.bad + 1,
      all: feedback.all + 1, 
      average: feedback.average - 1 / 10,
      positive: (feedback.good / feedback.all ) * 100
    })
  }
  const handleNeutralClick = () => {
    setFeedback({...feedback, 
      neutral: feedback.neutral + 1, 
      all: feedback.all + 1,
      positive: (feedback.good / feedback.all ) * 100
    })
  }

  return (
    <div>
      <h1>Give your feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <h2>Statistics</h2>
      <Statistics text='Good' value={feedback.good} />
      <Statistics text='Neutral' value={feedback.neutral} />
      <Statistics text='Bad' value={feedback.bad} />
      <Statistics text='All' value={feedback.all} />
      <Statistics text='Average' value={feedback.average} />
      <Statistics text='Positive' value={feedback.positive + ' %'} />
    </div>
  );
}

export default App;
