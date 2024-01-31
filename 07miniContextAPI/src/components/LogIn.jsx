import React, { useContext, useState } from 'react'
import UserContext from '../context/context'

function LogIn() {

    const [username,setUsername] = useState('') 
    const [Password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,Password})
    }
  return (
    <div>
        <h2>LOGIN</h2>
        <input type="text" value={username}
        onChange={(e)=>{
            setUsername(e.target.value)
        }} placeholder='Username'/>
        {" "}
        <input type="text" value={Password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }} placeholder='Password'/>
        {" "} 
        <button onClick={handleSubmit}>Sumbit</button>
    </div>
  )
}

export default LogIn