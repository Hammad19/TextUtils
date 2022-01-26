import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App(props) {
  return (
  <>
  <Navbar title = "TextUtils" />
  <TextForm title = "Enter Text to Analyse"/>
  </>  
);
}

export default App;


