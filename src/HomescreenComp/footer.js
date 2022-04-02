import React, { Component } from 'react';
import './footer.css';
import {Link} from 'react-router-dom'

class footer extends Component{
    render(){
        return(
            <div className = {this.props.className}>
                <div id = "whitespace"></div>
                <div id = "footer-container">
                    <div id = "support">
                        <ul id = "contact">
                            <h1 id = "facilities">pIRfusiX</h1>
                            <Link id = "faq" to = "/logged/home">Home</Link>
                            <Link id = "faq" to = "/logged/patients">Patients</Link>
                            <Link id = "faq" to = "/logged/FAQ">Faq</Link>
                            <Link id = "contact" to = "/logged/about">Contact</Link>
                        </ul>
                    </div>
                    <div id = "location">
                        <p id = "loc-details">
                            31 Spooner Street <br></br>
                            Quahog, Rhode Island <br></br>
                            02860 <br></br>
                        </p>
                        <p id = "ph">(587) 437-6506</p>
                        <button id = "email-us" onClick={() => window.location = 'mailto:youssef.abdelmaksoud@ucalgary.ca'}>Email</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default footer;