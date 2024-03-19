import { useState } from 'react'
 
 
import './App.css'

function App() {

  let [counter ,setCounter] = useState(15)
    
  // let counter = 15;

  const addValue = () => {
    // console.log("value added", Math.random());
   if(counter<20)
    { 
    console.log("clicked",counter);
    counter = counter +1 ;
    setCounter(counter)
    }
  }
  const removeValue =() => {
    if(counter>0)
    {
    setCounter(counter -1)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>kaise ho akash</h2>
      <button 
      onClick={addValue}>
        AddValue{counter}</button>
      <br/> 
      <button
      onClick={removeValue}>remove Value{counter}</button>
    </>
  )
}

export default App
