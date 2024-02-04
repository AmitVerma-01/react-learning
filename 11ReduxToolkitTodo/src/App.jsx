import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {

  return (
    <>
      <h2 className='text-3xl'>Redux toolkit</h2>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
