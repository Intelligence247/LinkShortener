import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [shorturl, setShorturl] = useState('')
  const [long_url, setLong_url] = useState('')
  const [active, setactive] = useState('')
  const url = `https://api.shrtco.de/v2/shorten?url=${long_url}`;
  const handleInputs=(e)=>{
  // e.preventDefault();
setLong_url(e.target.value)
console.log(long_url)
  }
  
const handleClick=(e)=>{
  // e.preventDefault();
  fetch (url)
  .then((res)=>res.json())
  .then((datum)=>{
  setShorturl(datum.result.full_short_link)
  setactive(datum.error_code)
}
  
  )
  .catch((err)=>console.log(err))
}
useEffect(() => {
  handleClick()
  }, []);
  return (
    <div className="body">
     <main>
     <h1>A Simple URL Shortener</h1>
     <div className="inputbtn">
      <input type="text" placeholder='Input URL hear to be shorten'
      onChange={(e)=>handleInputs(e)}
      />
      <button 
      onClick={(e)=>handleClick(e)}
      >Click</button>
     </div>

     <div className="result">
      <div className="answer"> {shorturl} </div>
      <button>
        <img src="/media/copy.png" alt="" />
        </button>
     </div>
     </main>
    </div>
  )
}

export default App


//  https://dev.to/amissah17/how-to-build-a-link-shortening-app-with-react-and-bitly-api-4poe
// https://dev.bitly.com/api-reference/#createBitlink