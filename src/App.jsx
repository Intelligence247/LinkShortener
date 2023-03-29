import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body">
     <main>
     <h1>A Simple URL Shortener</h1>
     <div className="inputbtn">
      <input type="text" placeholder='Input URL hear to be shorten'/>
      <button>Click</button>
     </div>

     <div className="result"></div>
     </main>
    </div>
  )
}

export default App
