import React, {Component} from 'react';
import './TripTab.css'
import Navig from './Navbar'
import Footer from './footer'
import Card from './Card'
import {trips} from "./Trips"
import RequestHandle from '../RequestHelpers/RequestHandle';

class TripTab extends Component{

    constructor(props){
        super(props);
        this.state = {
            triplist:[],
        }
    }

    componentDidMount(){
        RequestHandle.getAllTrips().then((response) => {
            var temp = [];
            temp = response.data;
            this.setState({triplist: temp});
            console.log(this.state.triplist);
        })
    }

    render(){
        return(
            <div>
                <Navig/>
                <div id = "all-trips">
                    <ul id = "all-the-trips">
                        {this.state.triplist.map((the_trip) => {
                            return <Card id = {the_trip.tripid} patient = {the_trip.hcn} eta = {the_trip.elapsedTime}></Card>
                        })}
                    </ul> 
                </div>
                <Footer/>
            </div>
        )
    }
}

export default TripTab;