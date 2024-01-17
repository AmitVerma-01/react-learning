import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(0);
  
  // let counter = 0;
  const addValue = ()=>{ 
    if(counter == 20 ){
      return;
    }
    counter++
    setCounter(counter);
  };
  const removeValue = ()=> {
    if(counter == 0){
      counter=0;
      return;
    }
    counter--;

    setCounter(counter);
  }
  
  return (
    <>
     <h1>chai aur code</h1> 
     <h2>counter value : {counter}</h2>

     <button onClick = {addValue}>Add value {counter}</button> <t/> <t/>
     <button onClick={removeValue}>Remove value {counter}</button>
     <footer>counter : {counter}</footer>
    </>
  )
}

export default App
