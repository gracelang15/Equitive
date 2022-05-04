import React, { useState, useEffect } from "react";
import { Card, Button, Alert, Container, Row, CardGroup, ProgressBar, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase"
import { doc, getDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";

export default function Modules() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const docRef2 = doc(db, "modules", firebase.auth().currentUser.email);
  const [roles, setRoles] = useState([])
  const [moduleInfo, setModuleInfo] = useState([]);
  const [loader, setLoader] = useState(true)
  const [progress, setProgress] = useState([]);


  useEffect(() => {
    const loadData = async () => {
      const docSnap = await getDoc(docRef2);
      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    loadData().then((value) => {
      setModuleInfo(value)
      console.log(value)
      setLoader(false)
      return value
    }).then((value) => {
      const roles = Object.keys(value.obj)
      setRoles(roles)
      console.log(roles)
      const map1 = roles.map(x => value.obj[x].video + value.obj[x].quiz)
      setProgress(map1)
      /*setPercent(sum/(roles.length*2)*100)*/
    })
  }, []);

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <h2 className="text-center mt-3">Modules</h2>
      <div className="main-div">
        <Container>
          <Row>
            <CardGroup className="mt-4">
              {roles.map(((x, i) => {
                return (
                  <Col className="mt-3">
                    <Card>
                      <Card.Body>
                        <Card.Title className="card-header text-center mb-2">
                          {x == "hiringDecision"
                            ? "hiring decision"
                            : x == "jobDescriptions"
                            ? "job descriptions"
                            : x}
                        </Card.Title>
                        <Card.Text>
                          <ProgressBar
                            variant="warning"
                            className="mt-5"
                            animated
                            now={(100 * progress[i]) / 2}
                          />
                          <h2 className="text-center mt-3">
                            {(100 * progress[i]) / 2}%
                          </h2>
                        </Card.Text>
                      </Card.Body>
                      <div className="text-center">
                        <Button className="mb-3" size="sm" variant="custom" type="submit" href={progress[i] == 0 ? "modules/video/".concat(x) : "modules/quiz/".concat(x)}>
                          Continue to {progress[i] == 0 ? "Video" : "Quiz"}
                        </Button>
                      </div>
                    </Card>
                  </Col>
                );
              }))}
            </CardGroup>
          </Row>
        </Container>
      </div>
    </>
  );
}
