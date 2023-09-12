import React, {useEffect, useState} from 'react'

const useAPI = (route, id) => {
    const baseURL='https://jsonplaceholder.typicode.com'

    const [data, setData] = useState('')

    useEffect(() => {

        fetch(`${baseURL}/${route}/${id}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.log(error))

    }, [route, id])

console.log(data)
switch (route) {
    case 'users':
        let newData = {
            ...data
        }
        data === undefined && (newData.name = 'No Data')
        return {
            name: newData.name,
            title: "No Title"
        }
    case 'posts':
        return {
            name: "No name",
            title: data.title
        }
    case 'todos':
        return {
            name: "No name",
            title: data.title
        }
    default:
        return data
}
}

export default useAPI