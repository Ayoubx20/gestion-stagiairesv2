import React from "react";
import { NavLink } from "react-router-dom";
import './sbar.css';

const SbarAd = () => { 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* <h4 className="navbar-brand">GESTION STAGIAIRE</h4> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          
            <h3 className="nav-item">
              <h3 className="nav-link" >Admin</h3>
            </h3>
            <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/UserListAD">List des stagiaires</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-danger" to="/">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SbarAd;
