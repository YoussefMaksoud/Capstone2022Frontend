import React, {Component} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

class LC extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <LineChart className = "line-chart" width={600} height={400} data = {this.props.data}>
                <Line type="monotone" dataKey="value" stroke="#FFFFFF" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" />
                <YAxis />
            </LineChart>
        )
    }
};

export default LC;