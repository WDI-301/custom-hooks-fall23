import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useStringHook from './hooks/useStringHook'
import Example from './components/Example'
import useInput from './hooks/useInput'

function App() {
  const {
    stringHookState, 
    helloWorld, 
    reverseString,
    dblStr,
    setStringHookState
  } = useStringHook()

  const firstname = useInput('fname', 'First Name')
  const lastname = useInput('lname', 'Last Name')


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
      <h2>--------useInput-------</h2>
      <h3>First Name: {firstname.value}</h3>
      <input
         id={firstname.id}
         name={firstname.name}
         value={firstname.value}
         onChange={firstname.onChange}
         placeholder={firstname.placeholder}
      />
      <h3>Last Name: {lastname.value}</h3>
      <input
         id={lastname.id}
         name={lastname.name}
         value={lastname.value}
         onChange={lastname.onChange}
         placeholder={lastname.placeholder}
      />
      <h3>Email Name: </h3>
    </>

  )
}

export default App
