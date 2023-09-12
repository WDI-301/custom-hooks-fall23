import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useStringHook from './hooks/useStringHook'
import Example from './components/Example'

function App() {
  const {
    stringHookState, 
    helloWorld, 
    reverseString,
    dblStr,
    setStringHookState
  } = useStringHook()


  return (
    <>
    <h1>Custom Hooks</h1>
      <h4>---------String Hook-------</h4>
      <p>{stringHookState}</p>
      <input onChange={event => setStringHookState(event.target.value)}
      />
      <p>{helloWorld}</p>
      <button onClick={reverseString}>Reverse IT!</button>
      <button onClick={dblStr}>Double IT!</button>
      <Example />
    </>
  )
}

export default App
