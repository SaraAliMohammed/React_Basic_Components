import React, { createContext, useState } from 'react'

// 1-create context
const colorContext = createContext();

// 2-create provider
// update data 
const UseContextProvider = ({children}) => {

    const [dataContext, setData] = useState({id: 1, name: "test"});
    const changeData = (id, name) => {
        setData({id, name});
    }
  return (
    <div>
      <colorContext.Provider value={{dataContext, changeData}}>
      {children}
      </colorContext.Provider>
    </div>
  )
}

// 3-export context to use, provider to wrap all component
export {UseContextProvider, colorContext}
