import React, { useState } from "react";
import { Card, Button, Alert, Image, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { AiOutlineArrowLeft } from 'react-icons/ai'

export default function Standards() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Container>
      <Button className="mt-3" variant="none" href="/dashboard"><AiOutlineArrowLeft/> Back</Button>
      <h1 className="text-center mt-3">Standards and Templates</h1>
      <div className="text-center">
      <Image width={600} height={600} className="img-thumbnail secondary-image" src={require("./files.png")}
                alt={"people"}/>
      </div>
      <h2 className="w-100 text-center mt-2">
        Your Company's Collateral Goes Here
      </h2>
      </Container>
    </>
  );
}
