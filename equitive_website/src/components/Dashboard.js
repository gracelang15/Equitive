import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"

export default function Dashboard() {
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try{
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
                <h2 className="text-center mb-4">Dashboard</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Logged In user: </strong> {currentUser.email}
                <div></div>
                <Link to="/modules">My Modules</Link>
                <div></div>
                <Link to="/standards">Company Standards</Link>
            </Card.Body>
        </Card>
        <div className = "w-100 text-center mt-2">
            <Button variant = "link" onClick={handleLogout}>Log Out</Button>
        </div>
    </>
  )
}
