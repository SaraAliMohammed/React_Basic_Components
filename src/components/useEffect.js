import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    let [text, setText] = useState("");
    let [color, setColor] = useState("red");

    useEffect(()=>{
        console.log("Start");
    },[]);

    useEffect(()=> {
        console.log("Change");
    });

    useEffect(() => {
        console.log("COlor Changed");
    }, [color]);

    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <span>{text}</span>

            <h1 style={{ color }}>Welcome</h1>
            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setColor("yellow")}>Yellow</button>
            <button onClick={() => setColor("red")}>Red</button>

        </div>
    )
}

export default UseEffectExample
