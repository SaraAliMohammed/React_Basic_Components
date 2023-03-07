import React, { useState } from 'react'

const StateExample = () => {
  let [count1, setCount] = useState(0);
  let count2 = 0;
  const handleIncrease = () => {
    setCount(++count1);
    ++count2;
    console.log(count2);
  }

  const handleDecrease = () => {
    setCount(--count1);
    --count2;
    console.log(count2);
  }

  let [text,setText] = useState("");

  let [color,setColor] = useState("red");
  return (
    <div>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <label>Count1 with state is : {count1}</label><br/>
      <label>Count2 without state is : {count2}</label>
      <input type="text" onChange={(e)=>setText(e.target.value)}/>
      <span>{text}</span>
      <div>
        <h1 style={{color}}>Welcome</h1>
        <button onClick={()=>setColor("blue")}>Blue</button>
        <button onClick={()=>setColor("yellow")}>Yellow</button>
        <button onClick={()=>setColor("red")}>Red</button>

      </div>
    </div>
  )
}

export default StateExample
