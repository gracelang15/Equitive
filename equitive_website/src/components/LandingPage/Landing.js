import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { Link } from "react-router-dom"
import './Landing.css'
import { IoGameController } from 'react-icons/io5'
import { VscDebugContinue } from 'react-icons/vsc'
import { HiOutlineClipboardList } from 'react-icons/hi'

export default function Landing() {

  return (
    <div>
      <div className="main">
        <Container>
          <Row>
            <Col>
              <div className="intro-text">
                <h1 className='title mt-5'>
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
              <img className="img-thumbnail main-image" src={require("./landing.png")}
                alt={"people"} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='features'>
        <Container>
          <Row>
            <Col className='text-center'>
              <Container>
                <IoGameController size={70} />
              </Container>
            </Col>
            <Col className='text-center'>
              <Container>
                <VscDebugContinue size={70} />
              </Container>
            </Col>
            <Col className='text-center'>
              <Container>
                <HiOutlineClipboardList size={70} />
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
      <div className="information">
        <Container>
          <Row>
            <Col className="d-flex align-items-center justify-content-center mt-5">
              <Image width={250} height={250} className="img-thumbnail secondary-image" src={require("./money.png")}
                alt={"people"} roundedCircle/>
            </Col>
            <Col className="d-flex align-items-center">
              <Container>
                <h1><strong>Diverse teams are more productive and more profitable</strong></h1>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center">
              <Container>
                <h1><strong>Diversity leads to greater retention and improved workplace culture</strong></h1>
              </Container>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <Image width={250} height={250} className="img-thumbnail secondary-image" src={require("./idea.png")}
                alt={"people"} roundedCircle/>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="d-flex align-items-center justify-content-center">
              <Image width={250} height={250} className="img-thumbnail secondary-image" src={require("./group-meeting.png")}
                alt={"people"} roundedCircle />
            </Col>
            <Col className="d-flex align-items-center">
              <Container>
                <h1><strong>We believe every employee is responsible for DE&amp;I</strong></h1>
              </Container>
            </Col>
          </Row>
          <Row>
            <h1 className="mt-3 mb-3"><strong>We offer customizable content based on individual employee needs that improve DE&amp;I best practices at every stage of the hiring process.</strong></h1>
          </Row>
        </Container>
      </div>
    </div>
  )
}
