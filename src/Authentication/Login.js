import './Login.css';
import React, {Component} from 'react';
import userLogo from '../Assets/user.png'
import passLogo from '../Assets/pass.png'
import Footer from "../HomescreenComp/footer"
import RequestHandle from '../RequestHelpers/RequestHandle';
import { useNavigate } from 'react-router-dom';

//<Link to = "/logged/home" className = "create-link">Login</Link>

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            current_email: "",
            current_pass: "",
            current_users: []
        }

        this.setPass = this.setPass.bind(this);
        this.setUser = this.setUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount(){
        RequestHandle.getLoginInfo().then((response) => {
            var temp = []
            temp = response.data;
            this.setState({current_users: temp})
            console.log(this.state.current_users)
        })
        .catch(function (ex) {
            console.log("Response parsing failed, Error: ", ex)
        });;
    }

    setUser(item){
        this.setState({current_email: item.target.value});
        this.forceUpdate();
    }

    setPass(item){
        this.setState({current_pass: item.target.value});
        this.forceUpdate();
    }

    handleLogin(){
        var valid_email = this.state.current_users.some(e => e.email === this.state.current_email);
        var valid_pass = this.state.current_users.some(e => e.license === this.state.current_pass);
        
        if(valid_email && valid_pass){
            window.open("/logged/home");
        }else{
            alert("Incorrect username or password");
        }
    }

    render(){
        return (
            <div className = "login-back">
                <header className = "top">LOG IN</header>
                <div id = "whitespace"></div>
                    <form className = "logbox">
                        <h1 className = "login"></h1>
                        <div className='user-div'>
                            <img src = {userLogo} className = "user-logo"></img>
                            <input type = "text" onChange = {(item) => this.setUser(item)} className = "username" placeholder = "EMAIL"></input>
                        </div>
                        <div className='pass-div'>
                            <img src = {passLogo} className = "pass-logo"></img>
                            <input type = "text" onChange = {(item) => this.setPass(item)} className = "password" placeholder = "LICENSE NUMBER"></input>
                        </div>
                        <button className = "confirm" onClick = {() => this.handleLogin()}>LOG IN</button>
                        <div className = "login-footer">
                            <div className = "dha">Not a member?</div>
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

                