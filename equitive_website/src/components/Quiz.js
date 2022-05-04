import React, { useState, useEffect } from "react";
import { Card, Button, Alert, Container, Row, CardGroup, ProgressBar, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";
// need to npm install react-youtube: https://github.com/tjallingt/react-youtube
// import YouTube from "react-youtube";


export default function Quiz() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const docRef2 = doc(db, "modules", firebase.auth().currentUser.email);
  const [roles, setRoles] = useState([])
  const [moduleInfo, setModuleInfo] = useState([]);
  const [loader, setLoader] = useState(true)
  const [progress, setProgress] = useState([]);
  

  let quizzes = {
    hiringDecision: "True or False: Sharing interview details in advance increases inclusivity by reducing anxiety for candidates",
    jobDescription: "True or False: Long job descriptions with many details attract diverse candidate pools",
    sourcing: "True of False: Best practice is to review your prior 3 years of data to see diversity in your hiring pipeline",
    resumes: "True or False: Traditional Black names on resumes have the same callback rates as traditional White names",
    interviews: "True of False: Candidates should all take assessments on a company laptop to level the playing field"
  }

  const displayQuiz = window.location.pathname.split("/").pop()

  async function handleClick(e) {
    e.preventDefault()
    try {

      const quizRef = doc(db, "modules", firebase.auth().currentUser.email);
      
     await updateDoc(quizRef, {
        [`obj.${displayQuiz}.quiz`]: 1
    });
      
      console.log("Document updated with email: ", firebase.auth().currentUser.email);
      window.location = "/dashboard"
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <h2 className="text-center mt-3">Quiz</h2>
      <div className="text-center">
        <p className="text-center mt-3"> {quizzes[displayQuiz]} </p>
        <div>
          <Button onClick={handleClick}
            className="mt-5"
            variant="custom"
            size="small"
            type="submit"
            href="/modules"
          >
            Complete Module
          </Button>
        </div>
      </div>
    </>
  );
}
