import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img-logo.png';
import "./NavBar.css"
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom' //, NavLink


const NavBar = () => {
  return (
    <Navbar expand="lg" bg="red" variant="red">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt='' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/Inicio">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/category/Cuaderno">Cuaderno</Nav.Link>
            <Nav.Link as={Link} to="/category/Combo">Combos</Nav.Link>
          </Nav>
          <CartWidget></CartWidget>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar