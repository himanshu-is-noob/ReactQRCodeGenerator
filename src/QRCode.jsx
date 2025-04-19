import React from "react"
import { useState } from "react"
import './index.css' ;
import 'bootstrap/dist/css/bootstrap.css';



const QRCodeGenerator = () => {
    const [url , seturl] = useState('') ;
    const [show , setshow] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setshow(true) ;
    }

     
    return (
        <>
            <div className="container">
                
                
                <div className="formPart">    
                    <div className="text-intro">
                        <h1>QR Code Generator</h1>
                        <p>Enter the URL and Generate your QR Code quickly</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="url"  name="url" value={url} placeholder="Enter URL" onChange={(e) => seturl(e.target.value)} class="form-control input-box" required/>
                        <input type="submit" value="Generate QR" class="btn btn-success mt-3" />   
                    </form>

                    <div className="output-part">
                        {
                            url && show && (
                                <img src={`https://image-charts.com/chart?cht=qr&chs=140x140&chl=${url}`}/>
                            )
                        }
                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default QRCodeGenerator