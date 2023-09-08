import React from 'react'
import { useState, useEffect, useRef } from 'react'
import {BsQrCode} from "react-icons/bs"
import axios from 'axios';
import { Html5QrcodeScanner } from 'html5-qrcode';
import QrReader from 'react-qr-reader-es6'
function Form() {
    const companies = ["Companies","BNY MELLON", "Capital One", "Citizens", "Flatiron", "Google", "HubSpot", "Hubdl", "IBM",
    "Jane Street", "JPMorgan Chase&Co", "Mastercard", "Meta", "Mircosoft", "Palantir", "DEShaw&Co", "Two Sigma"];
    const [company, setCompany] = useState([companies[0]])
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [note, setNote] = useState("")
    const [showScanner, setShowScanner] = useState(false)

    //const [showScanner, setShowScanner] = useState(false);
    // const linkedinRef = useRef();

    // const handleScanSuccess = (decodedText) => {
    //     setLinkedin(decodedText);
    //     setShowScanner(false);
    // };

    // const handleScanFailure = (errorMessage) => {
    //     console.log('showScanner before:', showScanner);
    //     setShowScanner(false);
    //     console.log('showScanner after:', showScanner);
    // };

    // const handleScanError = (error) => {
    //     console.log(error);
    //     setShowScanner(false);
    // };

    // const handleScanComplete = () => {
    //     setShowScanner(false);
    // };

    // const handleQrClick = () => {
    //     setShowScanner(true);
    // };

    // useEffect(() => {
    //     if (showScanner) {
    //         console.log('Rendering scanner');
    //         let scanner = new Html5QrcodeScanner(
    //             "qr-reader",
    //             { fps: 10, qrbox: 250 }
    //         );
    //         scanner.render(handleScanSuccess, handleScanFailure, handleScanError, handleScanComplete);
    //     }
    // }, [showScanner]);
    const handleScan = data => {
        if (data) {
          setLinkedin(data)
          setShowScanner(false)
        }
      }
    const handleError = err => {
        console.error(err)
      }
    const peopleInfor ={
        "company": company,
        "firstname": fname,
        "lastname": lname, 
        "email" : email,
        "linkedin": linkedin, 
        "note": note
    }
    const url = "/people/infor"
    function handleSubmit(){
        axios.post(url, peopleInfor)
            .then(response =>{
                console.log(response.data)
            })
            .catch (error => {
                console.error(error);
            })
    }
  return (
    <div className='mt-[2em] w-full items-center justify-center'>
        <div className='flex flex-col justify-center items-center '>
            <h2 className='border-b-2 border-tapia_blue text-[1.5rem] mb-2 font-playfair '> <span className = "text-tapia_blue text-[2rem] font-semibold"> HELLO,</span> I am Khoa Nguyen</h2>
            <h2 className='font-playball font-light text-blue_text'> I am happy to connect with you !!!</h2>
       </div>
       <div className="w-[90%] mt-4 mx-auto p-[1.25em] ">
        <form className="mx-auto flex flex-col gap-4">
            <div className='flex flex-row justify-between border-b-2 border-tapia_blue pb-2'>
            <label className='font-bold'>Company: </label>
            <select 
                id = "company-select"
                value = {company}
                onChange={(e) => setCompany(e.target.value)}
                >
                {companies.map((company) =>(
                    <option key = {company} value= {company}>
                        {company}
                    </option>
                ))}        
            </select>
            </div>
            <div className='flex flex-row gap-1 justify-between border-b-2 border-tapia_blue pb-2'>
                <label className='font-bold'>First Name: </label>
                <input
                    type = "firstname"
                    onChange={(e) => {
                        setFname(e.target.value);
                        //console.log(fname);
                    }}
                    
                    className= "border rounded -mt-1 px-1 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                </input>
            </div>
            <div className='flex flex-row gap-1 justify-between border-b-2 border-tapia_blue pb-2'>
                <label className='font-bold'>Last Name: </label>
                <input
                    type = "Lastname"
                    onChange = {(e) => setLname(e.target.value)}
                    className= "border rounded -mt-1 px-1 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                </input>
            </div>
            <div className='flex flex-row gap-1 justify-between border-b-2 border-tapia_blue pb-2'>
                <label className='font-bold'>Email: </label>
                <input
                    type = "email"
                    onChange = {(e) => setEmail(e.target.value)}
                    className= "border rounded -mt-1 px-1 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                </input>
            </div>
            <div className='flex flex-row gap-1 justify-between border-b-2 border-tapia_blue pb-2'>
                <label className='font-bold'>LinkedIn: </label>
                {/* <BsQrCode onClick={handleQrClick} /> */}
                <BsQrCode onClick={() => setShowScanner(true)} />
                {showScanner && (
                    <QrReader
                    delay={200}
                    //onError={handleError}
                    onScan={handleScan}
                    //style={{ width: '300%', height: '500px' }}
                    className="w-[200%] md:w-1/2 lg:w-1/3 xl:w-1/4"
                    />
                )}
                <input
                    //ref={linkedinRef}
                    type="url"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    className="border rounded -mt-1 px-1 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                
            </div>
            {/* {showScanner && <div id="qr-reader" />} */}
            <div className='flex flex-row gap-1 justify-between border-b-2 pb-2'>
                <label className='font-bold'>Note: </label>
                <textarea id="notes" name="notes"
                    onChange = {(e) => setNote(e.target.value)}
                    className= "border rounded -mt-1 py-2 px-2 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                </textarea>
            </div>
        </form>
        <button className='bg-tapia_blue  text-white font-bold w-full py-2 rounded mt-4 text-[1.25rem]'
        onClick={handleSubmit}
        >Submit</button>
        </div>
    </div>
  )
}

export default Form
