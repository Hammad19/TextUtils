import React from 'react';
import PropTypes from 'prop-types';
import TextForm from './TextForm';


export default function Navbar(props) {
  return (
    <div className="wrapper">
    <header>
       <nav>
          <div className="menu-icon">
             <i className="fa fa-bars fa-2x"></i>
          </div>
          <div className="logo">
             {props.title}
          </div>
          <div className="menu">
             <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                
             </ul>
          </div>
       </nav>
    </header>
    </div>
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
