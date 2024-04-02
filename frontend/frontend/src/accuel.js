import React from 'react';
import Navbar from './nav/navbar';
// import './accueil.css'
function Accueil() {
  return (
    <>
    <Navbar />
   
    <div className="container mt-5" style={{marginBottom: '170px'}}>
      <body>
      <h1 className="display-4">Gestion des Stagiaires</h1>
      <p className="lead">Bienvenue sur la plateforme de gestion des stagiaires!</p>
      <div className="row">
        <div className="col-md-6">
          <h2>Fonctionnalités disponibles :</h2>
          <ul>
            <li>Ajouter un nouveau stagiaire</li>
            <li>Consulter la liste des stagiaires</li>
            <li>Modifier les informations d'un stagiaire</li>
            <li>Supprimer un stagiaire</li>
            <li>Générer des rapports sur les stagiaires</li>
            <li>Ajouter un nouveau stagiaire</li>
            <li>Consulter la liste des stagiaires</li>
            <li>Modifier les informations d'un stagiaire</li>
            <li>Supprimer un stagiaire</li>
            <li>Générer des rapports sur les stagiaires</li>
            
          </ul>
        </div>
        <div className="col-md-6">
          <p>Naviguez à travers les différentes fonctionnalités disponibles dans le menu.
          </p>
        </div>
      </div>
     
      </body>
    </div>
  
    </>
  );
}

export default Accueil;
