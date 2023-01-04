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
    document.getSelection().removeAllRanges();
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
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3">
               <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#706e6e': 'white' , color: props.mode === 'dark'? 'white': 'black'}} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase </button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to Lowercase </button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear Text </button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text </button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove Extra Text </button>



        </div>
        <div className='container my-3' style={{color: props.mode === 'dark'? 'white': 'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(' ').filter((element) =>{return element.length!==0}).length} Words & {text.length} Character</p>
            <p> {0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes read
            </p>
            <h2> Preview </h2>
            <p> {text.length>0 ? text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
