import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Login from './Authentication/Login'
import SignUp from './Authentication/SignUp'
import About from './HomescreenComp/About'
import PatientTab from './HomescreenComp/PatientTab'
import TripTab from './HomescreenComp/TripTab'
import Faq from './HomescreenComp/Faq'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/NewAccount" element = {<SignUp/>}/>
        <Route path = "/logged/home" element = {<Home/>}/>
        <Route path = "/logged/trip" element = {<TripTab/>}></Route>
        <Route path = "/logged/patient" element = {<PatientTab/>}/>
        <Route path = "/logged/about" element = {<About/>}/>
        <Route path = "/logged/FAQ" element = {<Faq/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

