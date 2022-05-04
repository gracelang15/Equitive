import React, { useState, useEffect } from 'react'
import { Card, Button, Row, Container, CardGroup, ListGroup } from 'react-bootstrap'
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
    const docRef2 = doc(db, "modules", firebase.auth().currentUser.email);
    const [user, setUser] = useState([]);
    const [moduleInfo, setModuleInfo] = useState([]);
    const [loader, setLoader] = useState(true)
    const [percentDone, setPercent] = useState(0)


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
            setLoader(false)
            console.log(value)
            return value
        }).then((value) => {
            const roles = Object.keys(value.obj)
            const map1 = roles.map(x => value.obj[x].video + value.obj[x].quiz)
            console.log(map1)
            const sum = map1.reduce((partialSum, a) => partialSum + a, 0);
            setPercent(sum / (roles.length * 2) * 100)
        })
    }, []);

    const Circle = ({ colour, percentage }) => {
        const r = 70;
        const circ = 2 * Math.PI * r;
        const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
        return (
            <circle
                r={r}
                cx={100}
                cy={100}
                fill="transparent"
                stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
                strokeWidth={"2rem"}
                strokeDasharray={circ}
                strokeDashoffset={percentage ? strokePct : 0}
            ></circle>
        );
    };

    const Text = ({ percentage }) => {
        return (
            <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                fontSize={"2em"}
                fontFamily='Staatliches'
            >
                {percentage.toFixed(0)}%
            </text>
        );
    };

    const Pie = ({ percentage, colour }) => {
        const pct = percentage;
        return (
            <svg width={200} height={200}>
                <g transform={`rotate(-90 ${"100 100"})`}>
                    <Circle colour="lightgrey" />
                    <Circle colour={colour} percentage={pct} />
                </g>
                <Text percentage={pct} />
            </svg>
        );
    };

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
                            <Card className='mt-5 mb-5'>
                                <Card.Body>
                                    <Card.Title className="card-header text-center"><Link to="/modules">Modules</Link></Card.Title>
                                    <div className="text-center mt-5">
                                        <Pie percentage={percentDone} colour={"#FAC711"} />
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className='mt-5 mb-5'>
                                <Card.Body>
                                    <Card.Title className="card-header text-center mb-2"><Link to="/standards">Resources</Link></Card.Title>
                                    <img className="img-thumbnail" src={require("./dashboard.png")}
                                        alt={"woman with list"} />
                                    <div className='text-center'>Standard &amp; Templates</div>
                                </Card.Body>
                            </Card>
                            <Card className='mt-5 mb-5'>
                                <Card.Body>
                                    <Card.Title className="card-header text-center mb-2">About Me</Card.Title>
                                    <Card.Text>
                                        <strong>Email: </strong>{currentUser.email}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Department: </strong>{user.department}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Job Title: </strong>{user.jobTitle}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Hiring Influence: </strong>
                                        <ListGroup as="ol" numbered variant="flush">
                                            {user.hiringDecision ? <ListGroup.Item as="li">Making Hiring Decisions</ListGroup.Item> : null}
                                            {user.interviews ? <ListGroup.Item as="li">Conducting Interviews</ListGroup.Item> : null}
                                            {user.jobDescriptions ? <ListGroup.Item as="li">Defining or Writing Job Descriptions</ListGroup.Item> : null}
                                            {user.resumes ? <ListGroup.Item as="li">Collecting and Screening Resumes</ListGroup.Item> : null}
                                            {user.sourcing ? <ListGroup.Item as="li">Seeking or Sourcing Talent</ListGroup.Item> : null}
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Row>
                </Container>
            </div>
        </>
    )
}
