import { useCallback, useState , useEffect , useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [CharAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  
  const passRef = useRef(null)

  const PasswordGenerator = useCallback(()=>{
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if(numberAllow) str+="1234567890";
    if(CharAllow) str+="~!`@#$%^&*()_+{}[]:;<>,.?/";
    
    for(let i=0;i<length;i++){
      let char = Math.floor((Math.random()*str.length) + 1 );
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length,numberAllow,CharAllow,setPassword])

  useEffect(PasswordGenerator,[length, numberAllow,CharAllow,PasswordGenerator])

  const copyToClip = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,15)

    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-white bg-gray-400'>  
     <h1 className='text-center text-3xl font-bold my-3'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
     <input type="text" 
     value = {password}
     readOnly
     ref={passRef}
     className='outline-none w-full py-1 px-3  text-orange-700'
     />
     <button 
     onClick={copyToClip}
     className='outline-none bg-blue-700 px-3 py-0.5 shrink-0'>Copy</button>
     </div>
     <div className='flex text-sm gap-x-3'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max ={50}
        id='length'
        value = {length}
        className='cursor-pointer' 
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label htmlFor="length"> Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        id='check'
        onChange={()=>{setNumberAllow((prev)=>!prev)}}
        className='cursor-pointer' />
        <label htmlFor="check"> Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        id='character' 
        className='cursor-pointer' 
        onChange={()=>{setCharAllow((prev)=>!prev)
        }}
        />
        <label htmlFor="character"> Characters</label>
      </div>
     </div>
    </div>
  )
}

export default App
