import React from 'react'
import { Navbar, Nav, Button, ButtonGroup, ButtonToolbar, Container} from 'react-bootstrap'
import "./navbar.css";

export default function NavigationBar() {
  return (
<Navbar className = "navbar-dark" expand="lg">
  <Container>
    <Navbar.Brand href="/">Equitive</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      <ButtonToolbar aria-label="Toolbar with button groups" className='ms-auto'>
          <ButtonGroup className="me-2">
          <Button variant="light" href="/login">LOG IN</Button>
          </ButtonGroup>
          <ButtonGroup className="me-2">
          <Button variant="light" href="/signup">SIGN UP</Button>
          </ButtonGroup>
        </ButtonToolbar>
    </Navbar.Collapse>
    </Container>
</Navbar>
  )
}
