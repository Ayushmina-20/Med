import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import logo from "../images/Medical-logos_white.png"

const Navbar = () => {
    return (
        <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/doctorlogin">DoctorLogin</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/patientlogin">PatientLogin</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/doctorregistration">DoctorRegistration</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/patientregistration">PatientRegistration</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/about">About</NavLink>
        
      </li>

    </ul>
  </div>
</nav>
        </>
    )
}

export default Navbar
