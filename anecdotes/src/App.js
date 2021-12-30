import React, { useState } from 'react'
import Maxvote from './maxvotes';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0);
  const [vote, setVote]=useState([0,0,0,0,0,0,0]);

  const increaseVotes= (index)=>{
    console.log(index);

   let points=[...vote]
    points[index]=points[index]+1;
    // console.log(copy[index]);
    // points=[...copy];
    console.log(points[index]);
    setVote(points)

  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      {/* (max-min)+min  %7 so that it doesn;t cross max if crossed mod it */}
      <button onClick={()=>{ setSelected( (selected + Math.floor(Math.random() * (7 - 1) + 1 ) ) % 7 ) } }>Next anecnode</button>
      <button onClick={ ()=>increaseVotes(selected) } >Vote </button>{ vote[selected]
      }
      <Maxvote  anecdotes={ anecdotes[vote.indexOf(Math.max(...vote))]} vote={ Math.max(...vote)}/>
    </div>
  )
}

export default App