import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import Cart from "../cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const NavBar = ({ setFilter }) => {
  return (
    <Navbar className="nav fixed-top" expand="lg">
      <NavLink to="/" className="text-logo">
        Dog Clothes
      </NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="bg-cyan" id="basic-navbar-nav">
        <Nav className="ml-auto text-center">
          <Nav.Link className="text-cyan " href="#">
            <NavLink className="text-home" to="/">
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link className="text-cyan " href="#">
            <NavLink
              className="text-home"
              to="/"
              onClick={() => {
                setFilter("Ropa");
              }}
            >
              Ropa
            </NavLink>
          </Nav.Link>
          <Nav.Link className="text-cyan " href="#">
            <NavLink
              className="text-home"
              to="/"
              onClick={() => {
                setFilter("Accesorios");
              }}
            >
              Accesorios
            </NavLink>
          </Nav.Link>
          <Nav.Link className="text-cyan " href="#">
            <FontAwesomeIcon icon={faFacebook} className="facebook" />
          </Nav.Link>
          <Nav.Link className="text-cyan " href="#">
            <FontAwesomeIcon icon={faInstagramSquare} className="instagram" />
          </Nav.Link>
          <Nav.Link className="text-cyan " href="#">
            <FontAwesomeIcon icon={faLinkedin} className="instagram" />
          </Nav.Link>
          <Nav.Link className="text-cyan " href="#">
            <Cart />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;