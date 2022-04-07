import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'

export default function NavBar() {
  return (
<Navbar expand="lg">
    <Navbar.Brand href="/">Equitive</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
  )
}
