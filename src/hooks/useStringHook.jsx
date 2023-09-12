import React, {useState} from 'react'

const useStringHook = () => {
    const [stringHookState, setStringHookState] = useState('This is a string')

    const helloWorld = "Hello World"

    const reverseString = () => {
        setStringHookState(stringHookState.split('').reverse().join(''))
    }
    //double the string with a space
    const doubleString = () =>  setStringHookState(stringHookState + ' ' + stringHookState)


  return {
    stringHookState: stringHookState,
    helloWorld: helloWorld,
    reverseString: reverseString,
    dblStr: doubleString,  //you can use a different name for the key on export
    setStringHookState: setStringHookState
  }
}

export default useStringHook