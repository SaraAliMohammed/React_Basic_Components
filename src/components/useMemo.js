import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
    const [counter, setCounter] = useState(0);
    const [test, setTest] = useState(0);
    let randomColor = '#'+ Math.floor(Math.random() * 16777215);

    const result = useMemo(() => {
        return(
            <div style={{color: randomColor}}>
                value is {counter} := {counter * 2}
            </div>
        )
    }, [counter])
  return (
    <div>
        {result}
      <button onClick={() => {setCounter(counter - 1) }}>-</button>
      <button onClick={() => {setCounter(counter + 1) }}>+</button>
      <button onClick={() => {setTest(test + 1) }}>Test</button>

    </div>
  )
}

export default UseMemoExample
