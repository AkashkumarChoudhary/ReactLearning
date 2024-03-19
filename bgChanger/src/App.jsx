 // eslint-disable-next-line no-unused-vars
 import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive")

  return (
   
    <div className="w-full h-screen duration-200"
    style= {{backgroundColor: color}}>
      <div className="w-full h-screen duration-200 flex flex-col justify-end items-center" style={{ backgroundColor: color }}>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
      <button
      onClick={() => setColor("red")}
      className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
      style={{backgroundColor: "red"}}>Red</button>
      <button
       onClick={() => setColor("green")}
      className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
      style={{backgroundColor: "green"}}>Green</button>
      <button
       onClick={() => setColor("blue")}
      className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
      style={{backgroundColor: "blue"}}>Blue</button>
       <button
       onClick={() => setColor("olive")}
      className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
      style={{backgroundColor: "olive"}}>olive</button>
       <button
       onClick={() => setColor(" grey")}
      className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
      style={{backgroundColor: "grey"}}>grey</button>
       <button
       onClick={() => setColor("Yellow")}
      className="outline-none px-4 py-2 rounded-full text-Yellow shadow-xl"
      style={{backgroundColor: "Yellow"}}>Yellow</button>
       <button
       onClick={() => setColor("Pink")}
      className="outline-none px-4 py-2 rounded-full text-black shadow-xl"
      style={{backgroundColor: "Pink"}}>Pink</button>
       <button
       onClick={() => setColor("Purple")}
      className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
      style={{backgroundColor: "Purple"}}>Purple </button>
       <button
       onClick={() => setColor("Lavender")}
      className="outline-none px-4 py-2 rounded-full text-black shadow-xl"
      style={{backgroundColor: "Lavender"}}>Lavender</button>
       <button
       onClick={() => setColor("White")}
      className="outline-none px-4 py-2 rounded-full text-black shadow-xl"
      style={{backgroundColor: "White"}}>White</button>
       <button
       onClick={() => setColor("black")}
      className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
      style={{backgroundColor: "black"}}>black</button>
         </div>
      </div>  
    </div>
    
  )
}

export default App 

 