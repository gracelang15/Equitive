import React, { useState, useEffect } from 'react'
import { Card, Button, Alert, Col, Row, Container, CardGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../../contexts/AuthContext"
import { db } from "../../firebase"
import { doc, getDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "./dashboard.css"


export default function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const docRef = doc(db, "users", firebase.auth().currentUser.email);
    const [user, setUser] = useState([]);
    const [loader, setLoader] = useState(true)



    async function loadData() {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    /*comment out function for testing styling*/
        loadData().then((value) => {
            setUser(value)
            setLoader(false)
        })


    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    /* comment out when testing styling*/
    if (loader) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1 className="text-center mb-4 mt-4">{user.first}'s DE&amp;I toolkit</h1>
            <div className="main-div">
                <Container>
                    <Row>
                        <CardGroup>
                            <Card className='mt-5'>
                                <Card.Body >
                                    <Card.Title className="card-header text-center mb-2"><Link to="/modules">Modules</Link></Card.Title>
                                        <div className='circle'>
                                            <h1 className='text-center'>XX%</h1>
                                        </div>
                                </Card.Body>
                            </Card>
                            <Card className='mt-5'>
                                <Card.Body>
                                    <Card.Title className="card-header text-center mb-2"><Link to="/standards">Resources</Link></Card.Title>
                                    <img className="img-thumbnail" src={require("./dashboard.png")}
                                        alt={"woman with list"} />
                                    <div className='text-center'>Standard &amp; Templates</div>
                                </Card.Body>
                            </Card>
                            <Card className='mt-5'>
                                <Card.Body>
                                    <Card.Title className="card-header text-center mb-2">About Me</Card.Title>
                                    <Card.Text>
                                        <strong>Email: </strong>{currentUser.email}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Department: </strong>{user.department}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Hiring Influence: </strong>{user.department}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Row>
                </Container>
                <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogout}>Log Out</Button>
                </div>
            </div>
        </>
    )
}
