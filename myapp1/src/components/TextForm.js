import  { useState } from 'react';
import '../index.css';

export default function TextForm(props) {


  const [text,SetText] = useState("Enter Text");
  const arr = text.split(' ')
  const [count,SetCount] = useState(arr.filter(word => word !== '').length);

  const handleOnChange = (event) => {
    SetText(event.target.value);
    const arr = text.split(' ')
    SetCount(arr.filter(word => word !== '').length);
  }

  const handleOnClick = () => {

    let newtext = text.toUpperCase();
    SetText(newtext);
    props.showalert('Successfully Converted to UpperCase','success')

  }

  const toLowerCase = () => {

    let newtext = text.toLowerCase();
    SetText(newtext);
    props.showalert('Successfully Converted to LowerCase','success')
  }

  const clearText = () => {

    let newtext = "";
    SetText(newtext);
    props.showalert('Successfully Cleared Text','success')
  }

  const copyText = () => {

    var copyText = document.getElementById("myInput");

  
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */
      navigator.clipboard.writeText(copyText.value);
        props.showalert('Successfully Copied Text','success')
  }

  const removeExtraSpaces = () => {

    let newtext = text.replace(/\s+/g, ' ').trim()
    SetText(newtext);
    props.showalert('Successfully Removed Extra Spaces','success')
  }


  return (
    <>
    <div className='.hei' style= {props.myStyle}>
    <div className="container">
    <h1 className='mg-4'>
      <br></br>
      {props.title}
     
    </h1>
    <br></br>
    <div className="input-group mb-3">
    
      <textarea id ="myInput" style={props.myStyle} className="form-control" rows={8} value={text} onChange={handleOnChange}>
      </textarea>
    </div>
    </div>
    <div className="container my-3 btn-group-justified">
      <div className="btn-group">
        <button  type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} btn-rounded mx-2`}  onClick={handleOnClick}>Get Into UpperCase</button>
      </div>
      <div className="btn-group">
        <button type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} btn-rounded mx-2`} onClick={toLowerCase}>Get Into LowerCase</button>
      </div>
      <div className="btn-group">
      <button type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} btn-rounded mx-2`} onClick={clearText}>Clear Text</button>
      </div>
      <div className="btn-group">
      <button type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} btn-rounded mx-2`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="btn-group">
      <button type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} btn-rounded mx-2`} onClick={copyText}>Copy Text</button>
      </div>
    </div>
    <div className='container my-5'>
      <h1>
        Your Text Summary
      </h1>

      <p>{count} word and {text.length} characters</p>
      <p>{0.008 * text.split(' ').length} Minutes read</p>
    </div>
    </div>
    </>
    );
}
