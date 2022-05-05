import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import "./product.css";

export default function Product() {
  return (
    <>
    <h1 className="text-center mt-3">Our answer to one-size-fits all training modules</h1>
    <div className = "light-background">
    <Container>
          <Row>
            <Col className="d-flex align-items-center justify-content-center mt-5">
              <Image className="img-thumbnail secondary-image mb-5" src={require("./custom.png")}
                alt={"people"}/>
            </Col>
            <Col className="d-flex align-items-center">
              <Container>
                <p><strong>Your employees' training is customized to their specific influence on the hiring pipeline. Allowing for targetted coaching to combat unconcious bias.</strong></p>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center">
              <Container>
                <p><strong>A dashboard where employees can view their progress on training modules, and see your company-wide hiring standards such as interview question banks and rubrics. Standardizing
                  interview evaluation criteria ensures all candidates are measured against the same standard.</strong></p>
              </Container>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <Image className="img-thumbnail secondary-image mb-5" src={require("./dashboard.png")}
                alt={"people"}/>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center justify-content-center mt-5">
              <Image className="img-thumbnail secondary-image mb-5" src={require("./news.png")}
                alt={"people"}/>
            </Col>
            <Col className="d-flex align-items-center">
              <Container>
                <p><strong>News feed where employees can see how others are doing on their diversity training. Gamification for encouragement and friendly competition.</strong></p>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center">
              <Container>
                <p><strong>A slack integration, so the D&amp;I training doesn't stop when the modules end. Reminders, check-ins, and quizzes can be setup so your employees refresh their skills seamlessly within their workspace. </strong></p>
              </Container>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <Image className="img-thumbnail secondary-image mb-5" src={require("./dashboard.png")}
                alt={"people"}/>
            </Col>
          </Row>
        </Container>
        <h1 className="text-center">Pricing</h1>
        <Row>
          <Col>
          <Card className="mb-5">
            Price 1
          </Card>
          </Col>
          <Col>
          <Card className="mb-5">
            Price 2</Card></Col>
            <Col>
            <Card className="mb-5">
              Price 3
            </Card>
            </Col>
        </Row>
        </div>
        </>
  )
}
