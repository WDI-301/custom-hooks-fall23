import React from 'react'
import useStringHook from '../hooks/useStringHook'

const Example = () => {
    const {
        stringHookState, 
        helloWorld, 
        reverseString,
        dblStr,
        setStringHookState
        } = useStringHook()
    
  return (
    <div>
        <h2>----Example-----</h2>
        <p>{stringHookState}</p>
        <input onChange={event => setStringHookState(event.target.value)} />
    </div>
  )
}

export default Example