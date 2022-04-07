import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import './Landing.css'
import {IoGameController} from 'react-icons/io5'
import {VscDebugContinue} from 'react-icons/vsc'
import {HiOutlineClipboardList} from 'react-icons/hi'

export default function Landing() {

  return (
<div>
<div className="main">
  <Container>
    <Row>
      <Col>
      <div className="intro-text">
        <h1 className='title'>
          HIRE BETTER.
        </h1>
      </div>
      <div className="intro-text">
        <h1 className='title'>
          BE BETTER.
        </h1>
      </div>
      <div>
        <p className='subtitle'>
          Integrate customized DE&amp;I tools for every employee at every step of the hiring process.
        </p>
        <>
          <style type="text/css">
            {`
            .btn-custom {
              background-color: #FAC711;
              color: black;
            }

            .btn-xxl {
              padding: 1rem 1.5rem;
              font-size: 1.5rem;
            }
            `}
          </style>
          <Button variant="custom" size="xxl" href='/signup'>
            SIGN UP
          </Button>
        </>
      </div>
      </Col>
      <Col>
        <img className="img-thumbnail"  src={require("./landing.png")} 
        alt={"people"}/>
      </Col>
      </Row>
  </Container>
</div>
  <div className='features'>
    <Container>
      <Row>
        <Col className='text-center'>
          <Container>
            <IoGameController size={70}/>
          </Container>
        </Col>
        <Col className='text-center'>
          <Container>
            <VscDebugContinue size={70}/>
          </Container>
        </Col>
        <Col className='text-center'>
          <Container>
            <HiOutlineClipboardList size={70}/>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="feature text-center">
        GAMIFICATION
        </Col>
        <Col className="feature text-center">
        CONTINUATION
        </Col>
        <Col className="feature text-center">
        STANDARDIZATION
        </Col>
      </Row>
      <Row>
        <Col className="description text-center">
          Interactive training modules your employees will enjoy taking
        </Col>
        <Col className="description text-center">
          Slack Integration with bias check-ins so the learning never stops
        </Col>
        <Col className="description text-center">
          Deploy company wide hiring standards so every candidate is measured with the same criteria
        </Col>
      </Row>
    </Container>
  </div>
</div>
  )
}
