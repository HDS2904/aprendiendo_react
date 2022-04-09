import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);
  return (
    <>
      <h1>Counter {state} </h1>
      <hr />
      <button className="btn" onClick={ () => decrement(2) } > -1 </button>
      <button className="btn" onClick={ reset } > reset </button>
      <button className="btn" onClick={ () => increment(2) } > +1 </button>
    </>
  )
}