import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import './style.css'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate('/profiledetails')
    } catch {
      setError('Failed to create an account')
    }

  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="label">Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="label mt-4">Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <>
              <style type="text/css">
                {`
            .btn-custom {
              background-color: #FAC711;
              color: black;
            }
            `}
              </style>
              <Button disabled={loading} variant="custom" className='w-100 mt-3' type='submit'>
                Sign Up
              </Button>
            </>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 label">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}