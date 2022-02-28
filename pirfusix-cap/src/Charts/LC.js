import React, {Component} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 300, pv: 2400, amt: 2400}, {name: 'Page C', uv: 300, pv: 2400, amt: 2400},
    {name: 'Page D', uv: 200, pv: 2400, amt: 2400}, {name: 'Page E', uv: 100, pv: 2400, amt: 2400}];

class LC extends Component{
    render(){
        return(
            <LineChart className = "line-chart" width={600} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#FFFFFF" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        )
    }
};

export default LC;