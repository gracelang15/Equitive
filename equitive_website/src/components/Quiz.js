import React, { useState, useEffect } from "react";
import { Card, Button, Form, Container, Row, CardGroup, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc, setDoc, getDoc, collection } from "firebase/firestore";
import firebase from "firebase/compat/app";
// need to npm install react-youtube: https://github.com/tjallingt/react-youtube
// import YouTube from "react-youtube";


export default function Quiz() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const docRef = doc(db, "users", firebase.auth().currentUser.email);
  const docRef2 = doc(db, "modules", firebase.auth().currentUser.email);
  const [roles, setRoles] = useState([])
  const [moduleInfo, setModuleInfo] = useState([]);
  const [loader, setLoader] = useState(true)
  const [progress, setProgress] = useState([]);
  const[disabled, setDisabled] = useState(true)
  const [user, setUser] = useState([]);


  let quizzes = {
    hiringDecision: "True or False: Sharing interview details in advance increases inclusivity by reducing anxiety for candidates",
    jobDescriptions: "True or False: Long job descriptions with many details attract diverse candidate pools",
    sourcing: "True or False: Best practice is to review your prior 3 years of data to see diversity in your hiring pipeline",
    resumes: "True or False: Traditional Black names on resumes have the same callback rates as traditional White names",
    interviews: "True or False: Candidates should all take assessments on a company laptop to level the playing field"
  }

  const displayQuiz = window.location.pathname.split("/").pop()

  useEffect(() => {
    const loadData = async () => {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    loadData().then((value) => {
        setUser(value)
        setLoader(false)
        console.log(value)
    })

}, []);

  async function handleClick(e) {
    e.preventDefault()
    try {
      const docRef2 = await setDoc(doc(collection(db, "news")), {
        message: user.first + " just completed the " + displayQuiz + " quiz!",
        createdAt: new Date()
      });

      const quizRef = doc(db, "modules", firebase.auth().currentUser.email);

      await updateDoc(quizRef, {
        [`obj.${displayQuiz}.quiz`]: 1
      });

      console.log("Document updated with email: ", firebase.auth().currentUser.email);
      window.location = "/modules"
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <Card className="mt-5">
        <Card.Body>
          <h1 className="text-center mb-4">Quiz</h1>
          <p className="text-center mb-4">{quizzes[displayQuiz]}</p>
          <Form>
            <Form.Group>
              <Row className="text-center">
                <Form.Check type="radio" 
                name="quiz" 
                onChange={() => setDisabled(false)}/>
                <p>True</p></Row>
              <Row className="text-center mt-10">
                <Form.Check type="radio"  name="quiz" 
                onChange={() => setDisabled(false)}/>
                <p>False</p></Row>
            </Form.Group>
            <Row className="text-center">
              <Button onClick={handleClick} disabled={disabled}
                className="mt-5 button-test"
                variant="custom"
                type="submit"
                href="/modules"
              >
                Complete Module
              </Button></Row>
            <>
            </>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
