import { useState } from 'react'
import QRCode from 'qrcode'

const App = () => {
   const [ url, setUrl ] = useState('')
   const [ qrcode, setQrCode ] = useState('')

   const GenerateQR = () => {
     QRCode.toDataURL( url, {
       width:800,
       margin: 2,
       color: {
         dark: '#000000ff',
         light: '#fff'
       }
     }, ( err, url ) => {
       if (err) throw err

       console.log(url)
       setQrCode(url)
     }  )
   }



  return (
    <div className='app' > 
      <h1>
      QR Generator
      </h1>
      <input 
      type="text" 
      placeholder='Type your website address'
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      />

      <button  
      onClick={GenerateQR}
      >
        Generate
      </button>
    { 
    qrcode &&
     <>

     <img src={qrcode}  />
     <a 
     href={qrcode}
     download="qrcode.png"    
     >
     Download
     </a>

     </>
    }


    </div>
  )
}

export default App