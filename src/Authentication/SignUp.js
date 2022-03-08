import './SignUp.css';
import Background from '../Assets/cool-background.png'
import Footer from "../HomescreenComp/footer"

import React, {Component} from 'react';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class SignUp extends Component{

    constructor(props){
       super(props);
       this.state = {
           fname: "",
           lname: "",
           position: "Software engineer",
           email: "",
           phone: "",
           license: ""
       }
       this.handleBack = this.handleBack.bind(this);
       this.handleLogin = this.handleSubmit.bind(this);
       this.validFName = this.validFName.bind(this);
       this.validLName = this.validLName.bind(this);
       this.validEmail = this.validEmail.bind(this);
       this.validPhone = this.validPhone.bind(this);
       this.validLicense = this.validLicense.bind(this);
    }

    initialState = {
        fname: "",
           lname: "",
           position: "",
           email: "",
           phone: "",
           license: ""
    }

    validFName(item){
        let itemValue = item.target.value;
        this.setState({fname: itemValue})
        this.forceUpdate();
    }

    validLName(item){
        let itemValue = item.target.value;
        this.setState({lname: itemValue})
        this.forceUpdate();
    }

    validEmail(item){
        let itemValue = item.target.value;
        this.setState({email: itemValue})
        this.forceUpdate();
    }

    validPhone(item){
        let itemValue = item.target.value;
        this.setState({phone: itemValue})
        this.forceUpdate();
    }

    validLicense(item){
        let itemValue = item.target.value;
        this.setState({license: itemValue})
        this.forceUpdate();
    }

    handleBack(){
        this.props.history.goBack();
    }

    handleSubmit(event){
        const obj =
        {
            fname: this.state.fname,
            lname: this.state.lname,
            position: this.state.position,
            email: this.state.email,
            phone: this.state.phone,
            license: this.state.license
        };

        alert(JSON.stringify(obj));

        axios.post("https://pirfusix-solutions.herokuapp.com/SignUp", obj)
            .then(res => {
                console.log(obj);
                console.log(obj.data);
            }).catch(error => {
                console.log(error);
            });

            event.preventDefault();
    }

    render(){

        return (
            <div className = "create-back" >
                <header className = "create-top">pIRfusiX</header>
                <div id = "whitespace"></div>
                <form className = "createbox">
                    <h1 className = "create">Create Account</h1>
                    <div className = "fields">
                        <div className='name-fields'>
                            <h2 className = "label">Name</h2>
                            <input type = "text" 
                                className = "first-name" 
                                placeholder = "First Name"
                                onChange = {(item) => this.validFName(item)}>
                            </input>
                            <input type = "text" 
                                className = "last-name" 
                                placeholder = "Last Name"
                                onChange = {(item) => this.validLName(item)}>
                            </input>
                        </div>
                        <div className='other-fields'>
                            <div className = "inputs">
                                <h2 className = "label">Email</h2>
                                <input type = "text" 
                                    className = "email" 
                                    type = "email" 
                                    placeholder = "Email Address"
                                    onChange = {(item) => this.validEmail(item)}>
                                </input>
                            </div>
                            <div className = "inputs">
                                <h2 className = "label">Phone</h2>
                                <input 
                                    type = "text" 
                                    className = "phone" 
                                    type = "phone" 
                                    placeholder = "(403)123-4567"
                                    onChange = {(item) => this.validPhone(item)}>
                                </input>
                            </div>
                            <div className = "inputs">
                                <h2 className = "label">License</h2>
                                <input 
                                    type = "text" 
                                    className = "license" 
                                    placeholder = "123456"
                                    onChange = {(item) => this.validLicense(item)}>
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className = "checkbox">
                        <p>Physician</p>
                        <input type = "checkbox" className = "check-p"></input>
                        <p>Nurse</p>
                        <input type = "checkbox" className = "check-n"></input>
                    </div>
                    <div className = "sign-up-footer">
                        <button className = "back-btn" onClick={this.handleBack}>
                            <Link to = "/login" className = "back-txt">Back</Link>
                        </button>
                        <button 
                            className = "finish-btn" 
                            type = "submit" 
                            onClick={(event) => this.handleSubmit(event)}>Finish
                        </button>          
                    </div>

                </form>
                <h1 className = "divider"></h1>
                <Footer/>
            </div>
        )
    }
}

export default SignUp;