import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [shorturl, setShorturl] = useState('')

  return (
    <div className="body">
     <main>
     <h1>A Simple URL Shortener</h1>
     <div className="inputbtn">
      <input type="text" placeholder='Input URL hear to be shorten'/>
      <button>Click</button>
     </div>

     <div className="result">
      <img src="" alt="" />
      <div className="answer"></div>
      <button><img src="/media/copy.png" alt="" /></button>
     </div>
     </main>
    </div>
  )
}

export default App


// https://dev.to/amissah17/how-to-build-a-link-shortening-app-with-react-and-bitly-api-4poe
// https://dev.bitly.com/api-reference/#createBitlink