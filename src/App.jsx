import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useStringHook from './hooks/useStringHook'

function App() {
  const {stringHookState, helloWorld, reverseString} = useStringHook()


  return (
    <>
    <h1>Custom Hooks</h1>
      <h4>---------String Hook-------</h4>
      <p>{stringHookState}</p>
      <p>{helloWorld}</p>
      <button onClick={reverseString}>Reverse IT!</button>

    </>
  )
}

export default App
