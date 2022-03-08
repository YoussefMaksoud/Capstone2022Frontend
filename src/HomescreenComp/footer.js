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
                            <li id = "comp-email" className = "cont-item">HR: pIRfusiXSolutions@ucalgary.ca</li>
                            <li className = "cont-item">Software Dev: jeffrey.roszell@ucalgary.ca</li>
                            <li className = "cont-item">Software Dev: youssef.abdelmaksoud@ucalgary.ca</li>
                        </ul>
                    </div>
                    <div id = "FAQ">
                        <h5 className = "gq">Do you have questions? <Link id = "faq" to = "/logged/FAQ">FAQ</Link></h5>
                        
                    </div>
                    <div id = "location">
                        <h3 id = "facilites">pIRfusiX</h3>
                        <p id = "loc-details">
                            31 Spooner Street <br></br>
                            Quahog, Rhode Island <br></br>
                            02860 <br></br>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default footer;