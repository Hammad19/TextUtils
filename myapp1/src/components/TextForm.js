import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {

    const [text,SetText] = useState('Enter Text Here');
    const handleOnChange = (event) => {
        SetText(event.target.value);
      }

  return 
  (
    <>
    <h1>{props.title}</h1>
    <div class="input-group mb-3">
        <textarea value={text} className="form-control" rows={8} value={text} onChange={handleOnChange}></textarea>

    </div>
    </>
  );
}
