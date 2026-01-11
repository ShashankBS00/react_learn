import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('Enter name')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form submitted',name)
  }
  return (
    <div>
      <form onSubmit={e => submitHandler(e)}>
        <input type="text" placeholder="Enter your name " value={name} onChange={e => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
