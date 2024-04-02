import React from "react";
import { NavLink } from "react-router-dom";
import './sbar.css';

const Sbar = () => { 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* <h4 className="navbar-brand">GESTION STAGIAIRE</h4> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/AddUsser">add stage</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/UserList">my stage</NavLink>
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

export default Sbar;
