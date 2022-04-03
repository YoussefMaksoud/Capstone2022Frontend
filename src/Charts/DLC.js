import React, {Component} from "react";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';

class DLC extends Component{

  constructor(props){
    super(props);
  }

    render() {
        return (
            <ComposedChart
              width={600}
              height={400}
              data={this.props.data}
              margin={{
                top: 20,
                right: 80,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="time" label={{ value: 'time', position: 'insideBottomRight', offset: 0 }} scale="band" />
              <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="value" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="value" stroke="#ff7300" />
            </ComposedChart>
        );
      }
};

export default DLC;