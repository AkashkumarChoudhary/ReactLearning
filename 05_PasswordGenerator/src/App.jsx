import { useState, useCallback } from 'react'
 
import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const[charAllowed , setcharAllowed] = useState(false)
  const[password, setPassword ] = useState("") //  password is variable , setpassword is method
  
  const passwordGenerator = useCallback(() =>{
    let pass = "" 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()-_+={}~` "

    for (let i = 0; i <= array.length; i++) {
       let char = Math.floor(Math.random() * str.lenght +1)
      
    }
  },[ length , numberAllowed , charAllowed, setPassword])
  
  
  
  return (
    <>
      <h1  className='text-4xl text-center
      text-color-black'>Akash Kumar</h1> 
    </>
  )
}

export default App
