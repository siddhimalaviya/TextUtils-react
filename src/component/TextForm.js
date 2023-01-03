import React, { useState } from 'react'

export default function TextForm(props) {
const [text,setText] = useState('');

const handleUpClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase","success");
}
const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");

}
const handleClearClick = () =>{
    let newText = ''
    setText(newText)
    props.showAlert("Your text is cleared","success");

}
const handleCopy = () =>{
    var text  = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");

}

const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed!","success");

}

const handleOnChange = (event) =>{
    setText(event.target.value)
    
}

    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'? 'white': 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
               <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey': 'white' , color: props.mode === 'dark'? 'white': 'black'}} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase </button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase </button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text </button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text </button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Text </button>



        </div>
        <div className='container my-3' style={{color: props.mode === 'dark'? 'white': 'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(' ').join('').length} Words & {text.length} Character</p>
            <p> {0.008 * text.split(" ").length} Minutes read
            </p>
            <h2> Preview </h2>
            <p> {text.length>0 ? text:"Entersomething in the text abouve to preview it here"}</p>
        </div>
        </>
    )
}
