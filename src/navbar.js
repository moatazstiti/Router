import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form } from 'react-bootstrap'

function navbar({inputSerch,SetinputSerch,}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/view">About</Nav.Link>
            <Form.Control className='Form' type="text" placeholder="search" onChange={ (e)=> SetinputSerch (e.target.value)} />

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default navbar