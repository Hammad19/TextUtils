import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";



function App(props) {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  
  const [myStyle,setmyStyle] = useState(
    {
    color: 'black',
    backgroundColor: '#F1F1F1'
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
        backgroundColor: '#F1F1F1'

      })
      setMode('light')
      showalert('Light Mode Has Been Enabled','success')
      document.body.style.backgroundColor= '#F1F1F1';
    }
  }
  return (
    
  <>
  
  <Navbar mode = {mode} title = "TextUtils"  toggleMode={toggleMode}/>
  <Alert alert = {alert}/>

  <Routes>
    <Route path = "/About" element= {<About mode= {mode}/>}></Route>
    <Route path = "/" element= {<TextForm mode={mode} showalert= {showalert} myStyle = {myStyle} title = "Enter Text to Analyse"/>}></Route>
  </Routes>
  {/*  */}

  </>  


);
}

export default App;


