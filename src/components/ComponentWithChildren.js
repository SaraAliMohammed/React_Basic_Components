import React from 'react'

const ComponentWithChildren = (props) => {
  return (
    <div>
      <h1>Component</h1>
      {props.children}
    </div>
  )
}

export default ComponentWithChildren
