import  { useState } from 'react';
import '../index.css';

export default function TextForm(props) {

  const [text,SetText] = useState("Enter Text");

  const [btntext,Setbtntext] = useState("Enable Dark Mode");

  const [count,SetCount] = useState(0);

  const handleOnChange = (event) => {
    SetText(event.target.value);
    const arr = text.split(' ')
    SetCount(arr.filter(word => word !== '').length);
  }

  const handleOnClick = () => {

    let newtext = text.toUpperCase();
    SetText(newtext);
  }

  const toLowerCase = () => {

    let newtext = text.toLowerCase();
    SetText(newtext);
  }

  const clearText = () => {

    let newtext = "";
    SetText(newtext);
  }

  const removeExtraSpaces = () => {

    let newtext = text.replace(/\s+/g, ' ').trim()
    SetText(newtext);
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
    
      <textarea style={props.myStyle} className="form-control" rows={8} value={text} onChange={handleOnChange}>
      </textarea>
    </div>
    </div>
    <div className="container my-3 btn-group-justified">
      <div className="btn-group">
        <button  type="button" className="btn btn-primary mx-2 col-3"  onClick={handleOnClick}>Get Into UpperCase</button>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn-primary mx-2 col-3" onClick={toLowerCase}>Get Into LowerCase</button>
      </div>
      <div className="btn-group">
      <button type="button" className="btn btn-primary mx-2 col-3" onClick={clearText}>Clear Text</button>
      </div>
      <div className="btn-group">
      <button type="button" className="btn btn-primary mx-2 col-3" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
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