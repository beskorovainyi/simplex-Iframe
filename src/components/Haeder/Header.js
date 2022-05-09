import React from "react";

import {Navbar, Container, Nav} from "react-bootstrap";

const Header = () => {
  
  
  return(
    <>
      <Navbar>
      <Container>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Container>
      </Navbar>
    </>
  )
}

export default Header