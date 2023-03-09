import React, { useState, useEffect } from 'react'
import axios from 'axios';

const FetchAxios = () => {
    const [state, setState] = useState([]);
    const fetchData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json()).then(data => setState(data.data));        
    }

    const fetchAxios = async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setState(response.data);
    }

    useEffect(() => {
        //fetchData();
        fetchAxios();
    }, []);
    return (
        <div>
            Fetch Axios
            {state.map(item => { return (
                <h3 key={item.id}>{item.name}</h3>
            )})}
        </div>
    )
}

export default FetchAxios
