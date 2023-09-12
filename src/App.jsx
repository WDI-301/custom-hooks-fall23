import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useStringHook from './hooks/useStringHook'
import Example from './components/Example'
import useInput from './hooks/useInput'
import useAPI from './hooks/useAPI'

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
  const email = useInput('email', 'Email')

  const id = useInput('id', 'Id')
  const route = useInput('route', "Route")

  const API = useAPI(route.value, id.value)


  return (
    <>
    <h1>Custom Hooks</h1>
      {/* <h4>---------String Hook-------</h4>
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
      <h3>Email Name: {email.value}</h3>
      <input {...email}/> */}
    <h2>-------API-------</h2>
      Route: 
      <select {...route}>
        <option />
        <option value='users'>Users</option>
        <option value='posts'>Posts</option>
        <option value='todos'>Todos</option>
      </select><br/>
      Id: <input {...id} />
      
      <p>Name: {API.name}</p>
      <p>Title: {API.title}</p>
    </>


  )
}

export default App
