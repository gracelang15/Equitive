import React, { useEffect, useState } from 'react'
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import { collection, doc, getDocs } from "firebase/firestore";
import { Form, Row, Card, Container } from 'react-bootstrap';
import { MdOutlineCelebration, MdCelebration, GiGlassCelebration } from 'react-icons/md'

export default function News() {
    const [news, setNews] = useState([]);
    const [loader, setLoader] = useState([])

    useEffect(() => {
        const dataPosts = []
        const loadData = async () => {
            const querySnapshot = await getDocs(collection(db, "news"));
            querySnapshot.forEach((doc) => {
                dataPosts.push(doc.data())
            });
            return dataPosts
        }
        loadData().then((value) => {
            value.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return b.createdAt - a.createdAt;
              });
            setNews(value)
            setLoader(false)
            console.log(value)
        })
    }, []);

    return (
        <div>
            <h1 className="text-center mt-5">News</h1>
            <div className='main-div'>
            <Container>
                {news.map(((x, i) => {
                    return (
                        <Row>
                        <Card className = "mb-3 mt-3">
                            <Card.Text className = "mb-3">
                            <div className = "message">
                            <MdOutlineCelebration size={50} /> 
                            {"  "+x.message}
                            </div>
                            <div className = "dateTime mt-2">
                            {new Date(x.createdAt.seconds * 1000).toLocaleDateString("en-US")+ " " +
                            new Date(x.createdAt.seconds * 1000).toLocaleTimeString("en-US")}
                            </div>
                            </Card.Text>
                            </Card>
                            </Row>
                    )
                }))}
            </Container>
            </div>
        </div>
    )
}
