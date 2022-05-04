import React, { useState, useEffect } from "react";
import { Card, Button, Alert, Container, Row, CardGroup, ProgressBar, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { AiOutlineArrowLeft } from 'react-icons/ai'
// need to npm install react-youtube: https://github.com/tjallingt/react-youtube
// import YouTube from "react-youtube";


export default function Video() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const docRef2 = doc(db, "modules", firebase.auth().currentUser.email);
  const [roles, setRoles] = useState([])
  const [moduleInfo, setModuleInfo] = useState([]);
  const [loader, setLoader] = useState(true)
  const [progress, setProgress] = useState([]);
  
  let videos = {
    hiringDecision: "https://www.youtube.com/embed/idtqfK67_z8",
    jobDescription: "https://www.youtube.com/embed/IWspq_1WFaM",
    sourcing: "https://www.youtube.com/embed/gzzQpTSHEQA",
    resumes: "https://www.youtube.com/embed/kvdHqS3ryw0",
    interviews: "https://www.youtube.com/embed/B8CJ6G2KFYM"
  }

  const embedVideo = window.location.pathname.split("/").pop()


  async function handleClick(e) {
    e.preventDefault()
    try {

      const videoRef = doc(db, "modules", firebase.auth().currentUser.email);
      
     await updateDoc(videoRef, {
        [`obj.${embedVideo}.video`]: 1
    });
      
      console.log("Document updated with email: ", firebase.auth().currentUser.email);
      window.location = "/dashboard"
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <Button className="mt-3" variant="none" href="/modules"><AiOutlineArrowLeft/> Back to Modules</Button>
      <h2 className="text-center mt-3">Video</h2>
      <div className="text-center">
        <iframe
          src={videos[embedVideo]}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          height="400px"
          width="600px"
        />
        <div>
          <Button onClick={handleClick}
            className="mt-5"
            variant="custom"
            size="small"
            type="submit"
            href="/modules"
          >
            Continue to Quiz
          </Button>
        </div>
      </div>
    </>
  );
}
