import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Gestion des Stagiaires</h5>
            <p>
              Gestion des Stagiaires is a web application designed for managing
              internships, providing a platform for both interns and companies
              to facilitate the internship process.
            </p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <address>
              123 Avenue Internship<br />
              Rabat, MAROC<br />
              Phone: +123 456 789<br />
              Email: info@gestiondesstagiaires.com
            </address>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Gestion des Stagiaires. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
