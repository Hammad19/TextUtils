import React from 'react';
import PropTypes from 'prop-types';
import TextForm from './TextForm';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
   <div className="container-fluid">
     <a className="navbar-brand" href="/">{props.title}</a>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="about">About</Link>
         </li>
       </ul>
       <div className="form-check form-switch">
  <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
     </div>
   </div>
 </nav>
    );
}

Navbar.propTypes =
{
    title: PropTypes.string
}

Navbar.defaultProps =
{
    title: 10,
}
