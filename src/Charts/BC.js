import React, {Component} from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class BC extends Component{

  constructor(props){
    super(props);
  }

    render() {
        return (
            <BarChart
              width={800}
              height={600}
              data={this.props.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis dataKey="time" scale="point" padding={{ left: 10, right: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
        );
      }
};

export default BC;