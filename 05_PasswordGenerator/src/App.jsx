import { useState } from 'react'
 
import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const[charAllowed , setcharAllowed] = useState(false)
  const[password, setPassword] = useState("")
  

  return (
    <>
      <h1  className='text-4xl text-center
      text-color-black'>Akash Kumar</h1> 
    </>
  )
}

export default App
