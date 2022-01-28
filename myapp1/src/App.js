import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';



function App(props) {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const [myStyle,setmyStyle] = useState(
    {

    color: 'black',
    backgroundColor: 'white'
  });

  const showalert = (message,type)=>
  {
      setAlert(
        {
          message:message,
          type: type
        }
      )
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>
  {
    if (mode==='light')
    {
      setmyStyle({
        color: 'white',
        backgroundColor: 'black'

      })
      showalert('Dark Mode Has Been Enabled','success')
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
  <Alert alert = {alert}/>
  <TextForm showalert= {showalert} myStyle = {myStyle} title = "Enter Text to Analyse"/>
  </>  
);
}

export default App;


