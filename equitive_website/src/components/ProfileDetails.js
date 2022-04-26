import React, { useState, useRef } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { setDoc, collection, doc } from "firebase/firestore";
import { db } from "../firebase"
import firebase from "firebase/compat/app";

export default function ProfileDetails() {
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const jobTitleRef = useRef()
  const departmentRef = useRef()
  const [jobDescriptions, setJobDescriptions] = useState(false)
  const [sourcing, setSourcing] = useState(false)
  const [resumes, setResumes] = useState(false)
  const [interviews, setInterviews] = useState(false)
  const [hiringDecision, setHiringDecisions] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const docRef = await setDoc(doc(collection(db, "users"), firebase.auth().currentUser.email), {
        first: firstNameRef.current.value,
        last: lastNameRef.current.value,
        jobTitle: jobTitleRef.current.value,
        department: departmentRef.current.value,
        jobDescriptions: jobDescriptions,
        sourcing: sourcing,
        resumes: resumes,
        interviews: interviews,
        hiringDecision: hiringDecision

      });

      let obj = {}
      obj.jobDescriptions = {video: 0, quiz: 0 };
      obj.sourcing = {video: 0, quiz: 0 };
      obj.resumes = {video: 0, quiz: 0 };
      obj.interviews = {video: 0, quiz: 0 };
      obj.hiringDecision = {video: 0, quiz: 0 };
      if (!jobDescriptions){
        delete obj.jobDescriptions
      }
      if (!sourcing){
        delete obj.sourcing
      }
      if (!resumes){
        delete obj.resumes
      }
      if (!interviews){
        delete obj.interviews
      }
      if (!hiringDecision){
        delete obj.hiringDecision
      }
      console.log(obj);

      const docRef2 = await setDoc(doc(collection(db, "modules"), firebase.auth().currentUser.email), {
        obj
      });



      console.log("Document written with email: ", firebase.auth().currentUser.email);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  return (

    <Container>
      <h1 className="create-profile mt-5">Create Profile</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicInfo">
          <Form.Label>First Name</Form.Label>
          <Form.Control className="mb-4" ref={firstNameRef} required />
          <Form.Label>Last Name</Form.Label>
          <Form.Control className="mb-4" ref={lastNameRef} required />
          <Form.Label>Job Title</Form.Label>
          <Form.Control className="mb-4" ref={jobTitleRef} required />
          <Form.Label>Department</Form.Label>
          <Form.Control className="mb-4" ref={departmentRef} required />
        </Form.Group>
        <h2 className="text-center">What parts of the hiring process are you involved in? Select all that apply*</h2>
        <Form.Check className="mt-5"
          type="switch"
          id="custom-switch"
          label="Defining or Writing Job Descriptions"
          onChange={(e) => setJobDescriptions(e.target.checked)}
        />
        <Form.Check className="mt-3"
          type="switch"
          id="custom-switch"
          label="Seeking or Sourcing Talent"
          onChange={(e) => setSourcing(e.target.checked)}
        />
        <Form.Check className="mt-3"
          type="switch"
          size="xxl"
          id="custom-switch"
          label="Collecting and Screening Resumes"
          onChange={(e) => setResumes(e.target.checked)}
        />
        <Form.Check className="mt-3"
          type="switch"
          id="custom-switch"
          label="Conducting Interviews"
          onChange={(e) => setInterviews(e.target.checked)}
        />
        <Form.Check className="mt-3"
          type="switch"
          id="custom-switch"
          label="Making Hiring Decisions"
          onChange={(e) => setHiringDecisions(e.target.checked)}
        />
        <div className="d-grid gap-2">
          <Button className="mt-5" variant="custom" href="/dashboard" size="lg" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>


  )
}
