import React, { useState } from 'react'

const Maxvote = (props) => {

   //max index send , props send ,anecdote send with max vote

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes}</p>
      <p>has {props.vote}</p>
    </div>
  )
}

export default Maxvote