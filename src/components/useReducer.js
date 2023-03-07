import React, { useReducer } from 'react'

const UseReducerEample = () => {
    const intialValue = {
        count: 0
    }

    const reducer = (state, action) => {
        switch(action.type){
            case 'increment':
                return { count: state.count + 1};
            case 'decrement': 
                return { count: state.count - 1};
            case 'reset':
                return {count: 0}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, intialValue);

  return (
    <div>
        {state.count}
        <button onClick={() => {dispatch({type: 'increment'}) }}>+</button>
        <button onClick={() => {dispatch({type: 'decrement'}) }}>-</button>
        <button onClick={() => {dispatch({type: 'reset'})}}>Reset</button>
    </div>
  )
}

export default UseReducerEample
