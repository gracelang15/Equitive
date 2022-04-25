import React, { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { setDoc, collection, doc } from "firebase/firestore"; 
import {db} from "../firebase"
import firebase from "firebase/compat/app";

export default function ProfileDetails() {

  const [jobDescriptions, setJobDescriptions] = useState(false)
  const [sourcing, setSourcing] = useState(false)
  const [resumes, setResumes] = useState(false)
  const [interviews, setInterviews] = useState(false)
  const [hiringDecision, setHiringDecisions] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const docRef = await setDoc(doc(collection(db, "users"), firebase.auth().currentUser.email), {
        first: "Alan",
        last: "Turing",
        jobTitle: "Software Engineer",
        department: "Engineering",
        roles: ["resumes", "interview", "hiringDecision"]
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
        <Form.Check 
          type="switch"
          id="custom-switch"
          label="Defining or Writing Job Descriptions"
          value={!jobDescriptions}
          onChange={ (e) => setJobDescriptions( e.target.value )}
        />
        <p>
            {jobDescriptions}
        </p>
        <Form.Check 
          type="switch"
          id="custom-switch"
          label="Seeking or Sourcing Talent"
        />
        <Form.Check 
          type="switch"
          id="custom-switch"
          label="Collecting and Screening Resumes"
        />
        <Form.Check 
          type="switch"
          id="custom-switch"
          label="Conducting Interviews"
        />
        <Form.Check 
          type="switch"
          id="custom-switch"
          label="Making Hiring Decisions"
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    

  )
}
