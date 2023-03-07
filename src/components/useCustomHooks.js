import React from 'react'
import useFetchData from './customHooks/fetchData'

const UseCustomHooks = () => {
    const [data] = useFetchData("https://jsonplaceholder.typicode.com/users");
    return (
        <div>
            {data.map(item => {
                return(
                    <h1 key={item.id}>{item.name}</h1>
                )
            })}
        </div>
    )
}

export default UseCustomHooks
