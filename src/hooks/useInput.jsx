import React, {useState} from 'react'

const useInput = (id, placeholder) => {
    const [value, setValue] = useState('')
    const onChangeHandler = event => setValue(event.target.value)
    return {
        id: id,
        name: id,
        placeholder: `Please enter your ${placeholder}`,
        value: value,
        onChange: onChangeHandler
    }
}

export default useInput
