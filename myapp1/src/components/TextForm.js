import  { useState } from 'react';
import '../index.css';

export default function TextForm(props) {

  const [text,SetText] = useState("Enter Text");

  const [btntext,Setbtntext] = useState("Enable Dark Mode");

  const [myStyle,setmyStyle] = useState(
    {

    color: 'white',
    backgroundColor: 'black'
  }
  );

  const togglestyle = () =>
  {
    if (myStyle.color === 'black')
    {
      setmyStyle(
        {
          color: 'white',
          backgroundColor: 'black'
        }
      )
      Setbtntext('Enable Light Mode');
    }
    else
    {

      setmyStyle(
        {
          color: 'black',
          backgroundColor: 'white'
        }
      )
      Setbtntext('Enable Dark Mode');
    }
  }
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
    <div className='.hei' style= {myStyle}>
    <div className="container">
    <h1 className='mg-4'>
      <br></br>
      {props.title}
     
    </h1>
    <br></br>
    <div className="input-group mb-3">
    
      <textarea style={myStyle} className="form-control" rows={8} value={text} onChange={handleOnChange}>
      </textarea>
    </div>
    </div>
    <div className="container my-3">
    <button  type="button" className="btn btn-primary mx-2"  onClick={handleOnClick}>Get Into UpperCase</button>
    <button type="button" className="btn btn-primary mx-2" onClick={toLowerCase}>Get Into LowerCase</button>
    <button type="button" className="btn btn-primary mx-2 " onClick={clearText}>Clear Text</button>
    <button type="button" className="btn btn-primary mx-2 " onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    <button type="button" className="btn btn-primary mx-2 " onClick={togglestyle}>{btntext}</button>
    </div>
    
    <div className='container my-5'>
      <h1>
        Your Text Summary
      </h1>
    
      <p>{count} word and {text.length} characters</p>
      <p>{0.008 * text.split(' ').length} Minutes read</p>
    </div>
    <br></br>
    <br></br>
    
    </div>
    </>
    );
}
