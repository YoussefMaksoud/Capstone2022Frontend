import React, {Component} from 'react';
import './TripTab.css'
import Navig from './Navbar'
import Footer from './footer'
import Card from './Card'
import {trips} from "./Trips"
import RequestHandle from '../RequestHelpers/RequestHandle';
import LC from '../Charts/LC';

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
            console.log((temp));
        })
        .catch(function (ex) {
            console.log("Response parsing failed, Error: ", ex)
        });;
    }

    render(){
        return(
            <div>
                <Navig/>
                <div id = "the-container">
                    <div id = "all-trips">
                        <ul id = "all-the-trips">
                            {this.state.triplist.map((the_trip) => {
                                return <Card id = {the_trip.tripid} patient = {the_trip.fname + " " + the_trip.lname} eta = {the_trip.elapsedTime}></Card>
                            })}
                        </ul> 
                    </div>
                    <div id = "the-chart">
                            <LC></LC>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default TripTab;