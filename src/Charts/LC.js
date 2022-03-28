import React, {Component} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

class LC extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <LineChart className = "line-chart" width={800} height={600} data = {this.props.data}>
                <Line type="monotone" dataKey="value" stroke="#FFFFFF" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" />
                <YAxis />
            </LineChart>
        )
    }
};

export default LC;