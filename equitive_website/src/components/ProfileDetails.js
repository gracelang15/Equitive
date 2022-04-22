import React from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { setDoc, collection, doc } from "firebase/firestore"; 
import {db} from "../firebase"
import firebase from "firebase/compat/app";

export default function ProfileDetails() {

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const docRef = await setDoc(doc(collection(db, "users"), firebase.auth().currentUser.email), {
        first: "Alan",
        last: "Turing",
        jobTitle: "Software Engineer",
        department: "Engineering",
        jobDescriptions: 0,
        sourcing: 0,
        resumes: 1, 
        interview: 1,
        hiringDecision: 1
      });
    
      console.log("Document written with email: ", firebase.auth().currentUser.email);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  return (
    <Container>
      <h2 className="mt-5">Create Profile</h2>
      <p>What parts of the hiring process are you involved in? Select all that apply*</p>
      <Link to="/dashboard">Finish</Link>
      <Form onSubmit={handleSubmit}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>

  )
}
