import logo from '../logo.svg';
import '../App.css';
import Signup from './Signup';
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard';
import Login from './Login'
import Landing from './LandingPage/Landing';
import PrivateRoute from './PrivateRoute';
import NavBar from './NavBar/NavBar';
import React from 'react';
import Contact from './Contact/Contact';
import ProfileDetails from './ProfileDetails';
import Modules from './Modules/Modules';
import Standards from './Standards/Standards';
import Footer from './Footer';
import Video from './Video';
import Quiz from './Quiz';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <AuthProvider>
          <Routes>
            <Route path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/" element={<Landing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profiledetails" element={<ProfileDetails />} />
            <Route path="/modules"
              element={
                <PrivateRoute>
                  <Modules />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/standards"
              element={
                <PrivateRoute>
                  <Standards />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/modules/video/hiringDecision"
              element={
                <PrivateRoute>
                  <Video />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/modules/quiz/hiringDecision"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/modules/video/jobDescriptions"
              element={
                <PrivateRoute>
                  <Video />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/modules/quiz/jobDescriptions"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/modules/video/sourcing"
              element={
                <PrivateRoute>
                  <Video />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/modules/quiz/sourcing"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/modules/video/resumes"
              element={
                <PrivateRoute>
                  <Video />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/modules/quiz/resumes"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/modules/video/interviews"
              element={
                <PrivateRoute>
                  <Video />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/modules/quiz/interviews"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
