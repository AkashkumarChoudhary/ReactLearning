import { useState ,useCallback } from 'react'
 
import './App.css'

function App() { 
  const [length , setLenght] = useState(8)
  const [numberAllowed , setnumberAllowed ] = useState(false)
  const [charAllowed ,setcharAllowed] =  useState(false)
  const [password ,setPassword] =useState("")
  
  const passwordGenerator = useCallback(()=> {
    let pass = ""
    let str = 
    " A B C D E F G H I J K L M N O P Q R S T U V W X Y Za b c d e f g h i j k l m n o p q r s t u v w x y z "

    if (numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+=[]{}~ `"
     
    for (let i = 0; i<  length; i++) {
     let char = Math.floor(Math.random() *str.length +1 )
     pass = str.charAt(char)
    }

    setPassword(pass)

  },[length , numberAllowed,charAllowed,setPassword]) 

  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md
        rounded-lg px-4 my-8  text-orange-500 bg-grey-300'>Test</div>
    </>
  )
}

export default App
