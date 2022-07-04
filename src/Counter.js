import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice'
import { useState } from 'react';
// import styles from './Counter.module.css'

export function Counter() {
  const [value,setValue] = useState(0);
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br/>
        <input onChange={e=>setValue(e.target.value)} type="number" value={value} />
        <button
          aria-label="IncrementByAmount"
          onClick={() => dispatch(incrementByAmount(value))}
        >
          incrementByAmount
        </button>
      </div>
    </div>
  )
}