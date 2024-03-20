import React, { useContext } from 'react'
import { CounterContext } from './../../context/CounterContext'

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext)

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  )
}

export { Counter }
