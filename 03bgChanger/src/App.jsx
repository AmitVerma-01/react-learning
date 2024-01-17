import { useState } from 'react'

function App() {
  const [color , setColor] = useState("olive")

  return (
    <>
    <div className="h-screen w-screen" 
      style={{backgroundColor:color}}
    >
      <div className='flex flex-wrap fixed justify-center bottom-12 inset-x-0 '> 
        <div className='flex flex-wrap justify-center gap-3 bg-white rounded-3xl px-3 py-2'> 
          <button className=' text-white  outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'red'}} onClick={()=> setColor('red')} >Red</button>
          <button className=' text-white outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'blue'}} onClick={()=> setColor('blue')}>Blue</button>
          <button className=' text-white  outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'green'}} onClick={()=> setColor('green')}>Green</button>
          <button className=' text-black  outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'lavender'}} onClick={()=> setColor('lavender')}>Lavender</button>
          <button className=' text-white  outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'orange'}} onClick={()=> setColor('orange')} >Orange</button>
          <button className=' text-black  outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'yellow'}} onClick={()=> setColor('yellow')} >Yellow</button>
          <button className=' text-white  outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'olive'}} onClick={()=> setColor('olive')}>Olive</button>
          <button className=' text-white  outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'grey'}} onClick={()=> setColor('grey')}>Grey</button>
          <button className=' text-white  outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'purple'}} onClick={()=> setColor('purple')}>Purple</button>
          <button className=' text-black  outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'pink'}} onClick={()=> setColor('pink')}>Pink</button>
          <button className=' text-white  outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'black'}} onClick={()=> setColor('black')}>Black</button>
          <button className=' text-black  outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:'white'}} onClick={()=> setColor('white')}>White</button>
         </div>
      </div>
    </div>
    </>
   
  )
}

export default App
