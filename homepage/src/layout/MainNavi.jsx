import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function MainNavi() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav-style" bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">LOCO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='collapse navbar-collapse justify-content-between'>
        <Nav className="navbar-nav">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About111</Nav.Link>
        </Nav>
        <Nav className="navbar-nav">
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default MainNavi