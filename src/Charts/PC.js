import React, {Component} from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

class PC extends Component{

  constructor(props){
    super(props)
  }

    render() {
        return (
            <div>
                    <PieChart width={400}
                     height={400}
                     margin={{
                      top: 20,
                      right: 80,
                      bottom: 20,
                      left: 180,
                    }}>
                        <Pie data={this.props.data} dataKey="value" cx="50%" cy="50%" outerRadius={130} fill="#82ca9d" label/>
                    </PieChart>        
            </div>
        );
      }
};

export default PC;