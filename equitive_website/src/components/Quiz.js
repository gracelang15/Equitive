import React, { useState, useEffect } from "react";
import { Card, Button, Alert, Container, Row, CardGroup, ProgressBar, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
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
    hiringDecision: "Hiring Decisions Quiz",
    jobDescription: "Job Description Quiz",
    sourcing: "Sourcing Quiz",
    resumes: "Resumes Quiz",
    interviews: "Interviews Quiz"
  }

  const displayQuiz = window.location.pathname.split("/").pop()

  return (
    <>
      <h2 className="text-center mt-3">Quiz</h2>
      <div className="text-center">
        <p className="text-center mt-3"> {quizzes[displayQuiz]} </p>
        <div>
          <Button
            className="mt-5"
            variant="custom"
            size="small"
            type="submit"
            href="/modules"
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
}
