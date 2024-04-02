import React from "react";
import { NavLink } from "react-router-dom";
import './glo.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      
       <div className="container">
        <NavLink className="navbar-brand" to="/">GESTION STAGIAIRE</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="" id="navbarNav">
          <ul className="navbar-nav ml-auto"> 
            <li className="nav-item">
              <NavLink className="nav-link" to="/Logi">login</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/Signup">registered</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
              
            </li>
          </ul>
        </div>
      </div>
      </nav> 
      
  );
};

export default Navbar;
