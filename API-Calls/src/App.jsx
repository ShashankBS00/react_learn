import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    setData(response.data)
  }

  return (
    <div>
      <h1>API Calls Example</h1>
      <button onClick={fetchData}>Get data</button>

      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Completed: {item.completed.toString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
