import React, { Component } from 'react';
import './Card.css';
import arrow from '../Assets/arrow.png';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 200, pv: 2400, amt: 2400}]

class Card extends Component{

    constructor(props){
        super(props);
    }

    //er, images, extracting the payload is very important
    // avatar or anatomical model
    //to show sensor status and limb status

    render(){
        return(
            <div id = "card-container">
                <div id = "trip-identification">
                    <div id = "identification">ID: {this.props.id}</div>
                    <div id = "the-patient">Patient: {this.props.patient}</div>
                </div>
                <div id = "trip-info">
                    <div id = "phases">
                        <div id = "to-trips">
                            <button id = "to-trip1" onClick = {this.props.onClickPH}>Pre-Hospital
                            </button>
                            <button id = "to-trip3" onClick = {this.props.onClickH}>Hospital
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;