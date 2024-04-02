import React from 'react';
import Navbar from './nav/navbar';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './logi.css';

function Logi() {
  return (
    <>
      <Navbar />
      <Container>
        
        <h1 className="text-center mt-5">Gestion des Stagiaires</h1>
        <div className="container mt-5" style={{marginBottom: '220px'}}>
        <Row className="mt-5">
          <Col lg={6} md={12} className="mb-3">
            <h2>Login admin</h2>
            <br/>
            <ul className="list-unstyled">
              <li>Consulter la liste des stagiaires</li>
              <li>Valider les informations des stagiaires</li>
              <Button variant="success" className="mt-3" as={Link} to="/loginadmin">login</Button>

            </ul>
          </Col>
          
          <Col lg={6} md={12} className="mb-3">
            <h2>Login stagiaire</h2>
            <br/>
            <ul>
              <p>Ajouter un nouveau stage</p>
              {/* <p>Consulter la liste des stagiaires</p> */}
              <p>Modifier stage info</p>
              <p>Supprimer  stage</p>
              {/* <p>Générer des rapports sur les stagiaires</p> */}
              <Button variant="success" className="mt-3" as={Link} to="/Login">login</Button>
              <Button variant="info" className="mt-3 ms-2" as={Link} to="/Signup">Signup</Button>
            </ul>
          </Col>
        </Row>
        </div>
      </Container>
    </>
  );
}

export default Logi;
