import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import Logo from '../../assets/MAIT_LOGO.png'

// import { Link } from 'react-router-dom';

function NavigationBar(){
  return(
    <div className="navigation-bar row align-items-center">
      <div className="col-12 col-md-8">
        <div className="row align-items-center">
          <img id="mait-logo" src={Logo} alt="MAIT Logo" />
          <a href="http://it.mait.ac.in/" className="pl-2">
            <h2 id="page-title">Department of<br/>Information Technology</h2>
          </a>
         { /*<div className="row justify-content-end">
          <button className="btn btn-outline-danger" id="log-out">Log Out</button>
          </div>*/}
        </div>
      </div>
    </div>
  );
}


export default function Header(){
  return(
    <div className="header mb-3">
      <div className="mx-5">
        <NavigationBar />

      </div>
    </div>
  );
}

