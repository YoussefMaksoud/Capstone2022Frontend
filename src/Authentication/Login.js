import './Login.css';
import React, {Component} from 'react';
import userLogo from '../Assets/user.png'
import passLogo from '../Assets/pass.png'
import Background from '../Assets/cool-background.png'
import Footer from "../HomescreenComp/footer"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Login extends Component{
    render(){
        return (
            <div className = "login-back">
                <header className = "top">pIRfusiX Solutions</header>
                <div id = "whitespace"></div>
                    <form className = "logbox">
                        <h1 className = "login">Login</h1>
                        <div className='user-div'>
                            <img src = {userLogo} className = "user-logo"></img>
                            <input type = "text" className = "username" placeholder = "EMAIL"></input>
                        </div>
                        <div className='pass-div'>
                            <img src = {passLogo} className = "pass-logo"></img>
                            <input type = "text" className = "password" placeholder = "LICENSE NUMBER"></input>
                        </div>
                        <button className = "confirm">
                            <Link to = "/logged/home" className = "create-link">Login</Link>
                        </button>
                        <div className = "login-footer">
                            <div className = "dha">Don't have an account?</div>
                            <Link to = "/NewAccount" className = "create-link">Create</Link>
                        </div>
                    </form>
                <h1 className = "divider"></h1>
                <Footer/>
            </div>
        )
    }
}

export default Login;

                