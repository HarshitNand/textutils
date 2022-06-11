import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
 setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
 setText(newText)
    }
    const handleClrClick = ()=>{
        let newText = " " ;
 setText(newText)
    }

    const handleOnChange = (event)=>{
setText(event.target.value)
    }


    const [text, setText] = useState("Enter text here 2");
     
  return (
      <>
    <div className='container'>
        <h1 >{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} id="textbox" rows="8" ></textarea>
        </div>
       <button className="btn btn-primary" onClick={handleUpClick}>convert to Uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
       <button className="btn btn-primary mx-2" onClick={handleClrClick}>clear text</button>
</div>
<div className="container my-3 ">
    <h2>Your text summary</h2>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").length } Minutes read </p>
</div>
    </>
  )
}
