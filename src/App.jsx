import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import CopyToClipboard from 'react-copy-to-clipboard'
import './App.css'

function App() {
  const [shorturl, setShorturl] = useState('')
  const [long_url, setLong_url] = useState('')
  const [copy, setcopy] = useState(false)
  const [errM, seterrM] = useState('')

  
  const url = `https://api.shrtco.de/v2/shorten?url=${long_url}`;
  const handleInputs=(e)=>{
  e.preventDefault();
setLong_url(e.target.value)
  }
  
const handleClick=(e)=>{
  
  fetch (url)
  .then((res)=>res.json())
  .then((datum)=>{
  setShorturl(datum.result.short_link2)
  // setactive(datum.ok)
}
  
  )
  .catch((err)=>console.log(err))
  seterrM(long_url.length<1 ?'Inputbox must not be empty':long_url.length>1 && shorturl.length<1?'The URL you entered is invalid':long_url.length>1 && shorturl.length>1?'':'')
}
useEffect(() => {
  handleClick()
  }, []);
 let eff=((long_url.length-shorturl.length)*100)/long_url.length
 console.log(shorturl.length>1)
 console.log(long_url.length>1)

 useEffect(() => {
const timeover= setTimeout(() => {
  setcopy(false)
}, 2000);
 
   return () => {
     clearTimeout(timeover)
   }
 }, [copy])
 
  return (
    <div className="body">
     <main>
     <h1>A Simple URL Shortener</h1>
     <div className="inputbtnerr">
     <div className="inputbtn">
      <input type="text" placeholder='Input URL hear to be shorten'
      onChange={(e)=>handleInputs(e)}
      />
      <button 
      onClick={(e)=>handleClick(e)}
      >Shortify</button>

     </div>
     <div className="error">{errM}</div>
     </div>

     <div className="result">
      <div className="answer"> {shorturl} </div>
<CopyToClipboard
onCopy={()=>setcopy(true)}
text={shorturl}>
      <button className={`${copy&&'copiedbtn'}`}>
        <img src="/media/copy.png" alt="" />
        </button>
        </CopyToClipboard>
     </div>

     <div className={`efficiency ${(shorturl.length>1 && long_url.length)&& 'effV'}`}>
      <p>Pasted URL Length: <span>{long_url.length}</span></p>
      <p>Shortified URL Length: <span>{shorturl.length}</span></p>
      <p>Percentage Efficiency: <span>{eff.toFixed(2)}</span>%</p>
     </div>
     </main>
    </div>
  )
}

export default App


//  https://dev.to/amissah17/how-to-build-a-link-shortening-app-with-react-and-bitly-api-4poe
// https://dev.bitly.com/api-reference/#createBitlink