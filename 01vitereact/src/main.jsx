import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
  return (
    <div>
      <h1>CUstom App | chai</h1>
    </div>
  )
}

// const reactElement ={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target: '-blank',
//   },
//   children:'Click me to visit google'
// }

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'hhtps://google.com',target: '_blank'},
  'click me to visit google',
  anotherElement
)
 
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
    // <App />
  
)
