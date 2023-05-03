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
// setLong_url('')

  }



const handleClick=()=>{
  seterrM(long_url.length<1 ?'Inputbox must not be empty':'')

}
useEffect(() => {
  fetch (url)
  .then((res)=>res.json())
  .then((datum)=>{
  setShorturl(datum.result.short_link3)

})
  .catch((err)=>console.log(err))
  setLong_url('')
  }, []);


 let eff=((long_url.length-shorturl.length)*100)/long_url.length


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
      <input type="text" placeholder='Input URL to be shorten'
      value={long_url}
      onChange={(e)=>handleInputs(e)}
      />
      <button 
      onClick={handleClick}
      className='btnSh'
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
      <p>Efficiency: <span>{eff.toFixed(2)}</span>%</p>
     </div>
     </main>
    </div>
  )
}

export default App


