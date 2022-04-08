import React from 'react'
import { Container } from 'react-bootstrap'
import { Link} from "react-router-dom"

export default function ProfileDetails() {
  return (
    <Container>
    <h2 className="mt-5">Create Profile</h2>
    <p>What parts of the hiring process are you involved in? Select all that apply*</p>
    <Link to="/dashboard">Finish</Link>
    </Container>
    
  )
}
