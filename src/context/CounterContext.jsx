import React, { createContext, useReducer } from 'react'

// Define your initial state
const initialState = {
  count: 0,
}

// Define your reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

// Create the context
const CounterContext = createContext()

// Create a provider component
const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  )
}

export { CounterContext, CounterProvider }
