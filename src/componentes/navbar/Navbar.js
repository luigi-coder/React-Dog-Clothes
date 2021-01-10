import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import Cart from "../cart/Cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'


const NavBar = () => {
  return (
    <Navbar className="nav fixed-top bg-cyan" expand="lg" >
      <Navbar.Brand className="text-cyan" href="#">LS Diseño Web</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="bg-cyan" id="basic-navbar-nav">
        <Nav className="ml-auto text-center">
          <Nav.Link className="text-cyan " href="#">Home</Nav.Link>
          <Nav.Link className="text-cyan " href="#">Contacto</Nav.Link>
          <Nav.Link className="text-cyan " href="#">Producto</Nav.Link>
          <Nav.Link className="text-cyan " href="#">
          <FontAwesomeIcon icon={faFacebook} className="facebook"/>
          </Nav.Link>
          <Nav.Link className="text-cyan " href="#">
          <FontAwesomeIcon icon={faInstagramSquare} className="instagram"/>
          </Nav.Link>
          <Nav.Link className="text-cyan " href="#">
          <FontAwesomeIcon icon={faLinkedin} className="instagram"/>
          </Nav.Link>
          <Nav.Link className="text-cyan " href="#"><Cart/></Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
