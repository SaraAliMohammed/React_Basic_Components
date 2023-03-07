import React, { useRef, useContext } from 'react'
import { colorContext } from './useContext';

const UseRefExample= () => {
    const textRef = useRef();
    const {dataContext, changeData} = useContext(colorContext);
    const focus = () => {
        textRef.current.focus();
        changeData(1, textRef.current.value);
    };
  return (
    <div>
      <h1>{dataContext.id}</h1>
      <h1>{dataContext.name}</h1>
      <input type="text" ref={textRef}/>
      <button onClick={focus}>Focus Text</button>
    </div>
  )
}

export default UseRefExample
