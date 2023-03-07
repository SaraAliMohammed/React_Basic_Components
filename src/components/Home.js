import React from 'react'
import StateExample from './State'
import UseEffectExample from './useEffect'
import UseRefExample from './useRef'

const Home = () => {
  return (
    <div>
      Home Page
      <StateExample/><hr/>
      <UseEffectExample/><hr/>
      <UseRefExample/><hr/>
    </div>
  )
}

export default Home
