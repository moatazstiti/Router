import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const view = ({name, rate, description, postUrl}) => {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </Container>
      </Navbar>
     
      <h1>{name}</h1>
      <span>{rate}</span>
		<p> {description} </p>
    </div>
  )
}

export default view;