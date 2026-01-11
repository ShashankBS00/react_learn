import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(2)
function  incre(){
  setCount(count + 1)
} 
function decre(){
  setCount(count - 1)
}
    return (
    <div>
      <h1> {count}</h1>
      <button onClick={incre} > INCREASE </button>
<button onClick={decre}> DECREASE </button> 
    </div>
  )
}

export default App
