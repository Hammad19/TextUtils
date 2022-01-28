import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';



function App(props) {

  const [mode,setMode] = useState('light');

  const [myStyle,setmyStyle] = useState(
    {

    color: 'black',
    backgroundColor: 'white'
  });

  const toggleMode = ()=>
  {
    if (mode==='light')
    {
      setmyStyle({
        color: 'white',
        backgroundColor: 'black'

      })
      document.body.style.backgroundColor= 'black';
    setMode('dark');
    }
    else 
    {

      setmyStyle({
        color: 'black',
        backgroundColor: 'white'

      })
      setMode('light')
      document.body.style.backgroundColor= 'white';
    }
  }

  return (
  <>
  <Navbar mode = {mode} title = "TextUtils"  toggleMode={toggleMode}/>
  <TextForm myStyle = {myStyle} title = "Enter Text to Analyse"/>
  </>  
);
}

export default App;


