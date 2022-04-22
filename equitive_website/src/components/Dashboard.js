import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebase"
import { doc, getDoc} from "firebase/firestore";
import firebase from "firebase/compat/app";


export default function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const docRef = doc(db, "users", firebase.auth().currentUser.email);
    async function loadData() {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const docData = loadData()
    docData.then((value) => {
        console.log(value)
    })
    // console.log(docData)

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">My DE&amp;I toolkit</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong> {currentUser.email}
                    <strong>department: </strong> {docData}
                    <div></div>
                    <Link to="/modules">Modules</Link>
                    <div></div>
                    <Link to="/standards">Resources</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
