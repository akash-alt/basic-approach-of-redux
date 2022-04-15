import React from 'react'
import "./App.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const App = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: 'INC' })
  }
  // console.log("clicking")

  const decrement = () => {
    // console.log("clicking")
    dispatch({ type: 'DEC' })
  }

  const addby = () => {
    dispatch({ type: 'ADD', payload: 20 })
    console.log("working")
  }

  return (
    <div className='app'>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decremnt</button>
      <button onClick={addby}>Addby 10</button>
    </div>
  )
}

export default App