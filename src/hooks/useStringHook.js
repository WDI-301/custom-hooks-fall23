import React, {useState} from 'react'

const useStringHook = () => {
    const [stringHookState, setStringHookState] = useState('This is a string')

    const helloWorld = "Hello World"

    const reverseString = () => {
        setStringHookState(stringHookState.split('').reverse().join(''))
    }
  return {
    stringHookState: stringHookState,
    helloWorld: helloWorld,
    reverseString: reverseString
  }
}

export default useStringHook