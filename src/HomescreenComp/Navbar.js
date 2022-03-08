import './Navbar.css'
import React, {Component} from 'react';
import {MenuItems} from './MenuItems';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Navig extends Component{
    render(){
        return (
            <div className = {this.props.className}>
                <nav className = "NavItems">
                    <h1 className = "navbar-logo">pIRfusiX</h1>
                    <div className = "menu-icon">

                    </div>
                    <ul className = "NavMenu">
                        {MenuItems.map((item, index) => {
                            return(
                                <li key = {index}>
                                    <Link className = {item.cName} to = {item.url} >
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div id = "whitespace"></div>
            </div>
        )
    }
}

export default Navig;