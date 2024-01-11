import { useState } from 'react'
import Todos from './todos/todos' 
import AddTask from './input/add'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1 className='title'>Todo App</h1>
      <AddTask />
      <Todos />
    </div>
  )
}

export default App

