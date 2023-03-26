import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-${props.mode} navbar-expand-md bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand text-danger" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About us
                </Link>
              </li>
            </ul>
                {/* This is for color backgrounds  */}
               {/* <div className="d-flex">
                <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMode('info')}}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
               </div> */}

            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Toggle Mode</label>
            </div>
          </div>
        </div>
      </nav>
      <br/> 
    </>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string }; // in this navbar title is required , if i don't add the title in the element where i imort it , then it shows the error

//This is for default props values
// Navbar.defaultProps = { title: 'Set title here', aboutText: 'About us here' };
