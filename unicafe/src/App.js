import React, { useState } from 'react';
import Feedback from './feedback';
import Statistics from './statistics';


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback setgood={setGood}  good={good} neutral={neutral} bad={bad} setneutral={setNeutral} setbad={setBad}/>
      <Statistics  good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App