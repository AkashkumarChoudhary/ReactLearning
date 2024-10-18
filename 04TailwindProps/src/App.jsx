import { useState } from 'react'
 
import Card from './component/card'
function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username: "akash",
    age:21
  }

  return (
    <>
       <h1 className='bg-yellow-300 text-green p-4 rounded-xl mb-4'>Tailwind with akash</h1>
       <Card channel ="chai aur code" getObj = {myObj} btnText= "pure"/>
       <Card channel="akash" btnText = "nice"/>
       {/* <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" 
  src="https://images.pexels.com/photos/269724/pexels-photo-269724.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="384" height="512"  />
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */ }


    </>
  )
}

export default App
