import logo from '../logo.svg';
import '../App.css';
import Signup from './Signup';
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login'
import Landing from './Landing';
import PrivateRoute from './PrivateRoute';
import NavBar from './NavBar';
import React from 'react';
import Contact from './Contact';
import ProfileDetails from './ProfileDetails';
import Modules from './Modules';
import Standards from './Standards';

function App() {
  return ( 
    <React.Fragment>
      <NavBar></NavBar>
        <div>
          <BrowserRouter>
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
                <Route exact path="/" element={<Landing/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/profiledetails" element={<ProfileDetails/>}/>
                <Route path="/modules" element={<Modules/>}/>
                <Route path="/standards" element={<Standards/>}/>
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div>
    </React.Fragment>
  );
}

export default App;
