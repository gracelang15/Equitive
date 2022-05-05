import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Button, ButtonGroup, ButtonToolbar, Container } from 'react-bootstrap'
import "./navbar.css";
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from 'react-router-dom'
import { auth } from "../../firebase"

export default function NavigationBar() {
  const [error, setError] = useState("");
  const { logout } = useAuth() || {};
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState()
  const [loader, setLoader] = useState(true)

 onAuthStateChanged(auth, async (user) => {
    setLoggedIn(!!user);
    setLoader(false)
  });

  async function handleLogout(e) {
    setError('')
    try {
      await auth.signOut()
      navigate('/login')
    } catch {
      setError('Failed to log out')
      console.log(e)
    }
  }
  return (
    <Navbar className="navbar-dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Equitive</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            {loggedIn ? <Nav.Link href="/dashboard">Dashboard</Nav.Link> : null}
            {loggedIn ? <Nav.Link href="/modules">Modules</Nav.Link> : null}
            {loggedIn ? <Nav.Link href="/news">News</Nav.Link> : null}
          </Nav>
          {loader? null : !loggedIn ?
              <ButtonToolbar aria-label="Toolbar with button groups" >
                <ButtonGroup className="me-2">
                  <Button variant="light" href="/login">LOG IN</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2">
                  <Button variant="light" href="/signup">SIGN UP</Button>
                </ButtonGroup>
              </ButtonToolbar> :
              <ButtonToolbar aria-label="Toolbar with button groups" className='ms-auto'>
                <ButtonGroup className="me-2">
                  <Button variant="light" onClick={handleLogout}>LOG OUT</Button>
                </ButtonGroup>
              </ButtonToolbar>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
