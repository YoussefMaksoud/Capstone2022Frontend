import React, { Component } from 'react';
import './Card.css';
import arrow from '../Assets/arrow.png';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 200, pv: 2400, amt: 2400}]

class Card extends Component{

    constructor(props){
        super(props);
    }

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
                            <button id = "to-trip1" onClick = {this.props.onClick}>PH
                            </button>
                            <button id = "to-trip2" onClick = {this.props.onClick}>ICU
                            </button>
                            <button id = "to-trip3" onClick = {this.props.onClick}>OR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;