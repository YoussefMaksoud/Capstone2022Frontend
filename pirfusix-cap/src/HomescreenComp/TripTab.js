import React, {Component} from 'react';
import './TripTab.css'
import Navig from './Navbar'
import Footer from './footer'
import Card from './Card'
import {trips} from "./Trips"

class TripTab extends Component{
    render(){
        return(
            <div>
                <Navig/>
                <div id = "all-trips">
                    <ul id = "all-the-trips">
                        {trips.map((item, index) => {
                            return <Card id = {item.id} patient = {item.name} eta = {item.ETA}></Card>
                        })}
                    </ul> 
                </div>
                <Footer/>
            </div>
        )
    }
}

export default TripTab;