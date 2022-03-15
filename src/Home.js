import './Home.css';
import Navig from './HomescreenComp/Navbar'
import body_im from './Assets/body_outline.png'
import barchart from './Assets/barchart.png'
import linechart from './Assets/linechart.png'
import piechart from './Assets/piechart.png'
import doublelinechart from './Assets/doublelinechart.png'
import Footer from './HomescreenComp/footer.js';
import React, {Component}from 'react';
import LC from './Charts/LC';
import BC from './Charts/BC';
import PC from './Charts/PC';
import DLC from './Charts/DLC';
import Dropdown from './HomescreenComp/Dropdown';
import {patients} from './DummyData/patients.js'
import {trips} from './HomescreenComp/Trips'
import Card from "./HomescreenComp/Card";
import RequestHandle from './RequestHelpers/RequestHandle';

const test = {
    id: '1',
    test_String: '{"id":"1", "values":"[100, 150, 100, 200, 100]", "times":"[12:00, 12:05, 12:10, 12:15, 12:20]", "deviceLocation":"[1, 2, 3, 4, 1]"}'
}

const data = [{time: '12:00', value: 400}, {time: '12:05', value: 300}, {time: '12:10', value: 300},
    {time: '12:15', value: 200}, {time: '12:20', value: 100}];

class Home extends Component {

  constructor(){
    super();

    this.state = {
      chart_option: 1,
      trips: [],
      patients: [],
      trip_data_string: [],
      current_trip_id: "",
      current_times: [],
      current_values: [],
      data: data
    }

    this.showBar = this.showBar.bind(this);
    this.showLine = this.showLine.bind(this);
    this.showPie = this.showPie.bind(this);
    this.showScatter = this.showScatter.bind(this);
    this.displayTripInfo = this.displayTripInfo.bind(this);
    this.helloAlert = this.helloAlert.bind(this);
  }

  componentDidMount(){
    RequestHandle.getAllTrips().then((response) => {
      var temp = [];
      temp = response.data;
      this.setState({trips: temp});
      console.log((this.state.trips));
    })
    .catch(function (ex) {
        console.log("Response parsing failed, Error: ", ex)
    });;

    RequestHandle.getPatients().then((response) => {
      var temp = []
      temp = response.data;
      this.setState({patients: temp})
      console.log(this.state.patients)
    })
    .catch(function (ex) {
        console.log("Response parsing failed, Error: ", ex)
    });;
  }

  showLine = () => {
    console.log(this.state.chart_option)
    this.setState({
      chart_option: 1
    })
  }

  showBar = () => {
    console.log(this.state.chart_option)
    this.setState({
      chart_option: 2
    })
  }

  showPie = () => {
    console.log(this.state.chart_option)
    this.setState({
      chart_option: 3
    })
  }

  showScatter = () => {
    console.log(this.state.chart_option)
    this.setState({
      chart_option: 4
    })
  }

  displayTripInfo(){
      RequestHandle.getTripData().then((response) => {
        var temp = []
        temp = response.data;
        this.setState({trip_data_string: temp})
        this.setState({current_trip_id: this.state.trip_data_string.id})
        console.log(this.state.trip_data_string)
    })
    .catch(function (ex) {
        console.log("Response parsing failed, Error: ", ex)
    });;
  }

  helloAlert(){
    var vals_temp = JSON.parse(test.test_String).values
    vals_temp = vals_temp.replace("[", "")
    vals_temp = vals_temp.replace("]", "")
    var vals_int = vals_temp.split(',').map(function(item){
      return parseInt(item);
    })

    this.setState({current_values: Object.values(vals_int)})
    //alert(this.state.current_values)

    var times_temp = JSON.parse(test.test_String).times
    times_temp = times_temp.replace("[", "")
    times_temp = times_temp.replace("]", "")
    var times_int = times_temp.split(',')

    this.setState({current_times: times_int})
    //alert(this.state.current_times)

    let data_temp = []

    for(let i =0; i < this.state.current_times.length; i++){
      let obj = {
        time: this.state.current_times[i],
        value: this.state.current_values[i]
      }

      data_temp.push(obj);
    }

    this.setState({data: data_temp})
    console.log(this.state.data);

    this.setState({current_trip_id: test.id})

  }

  render(){
    return (  
    <div id = "overall">
      <Navig className = "navig-bar"/>
      <div id = "content-headers">
        <div className = "header-1">TRIP INFORMATION</div>
        <div className = "header-2">OXYGEN READINGS</div>
        <div className = "header-3">PATIENTS</div>
      </div>
      <div id = "home-content">
        <div id = "col-1">
          <div id = "trip-progress">
            <div id = "trip-details">
              <div id = "trip-id">
                <h5 className = "trip-det-head">Trip Identification Number: {this.state.current_trip_id}</h5>
                <hr></hr>
              </div>
              <div id = "eta">
                <h5 className = "trip-det-head">ETA:</h5>
                <hr></hr>
              </div>
              <p id = "notes">
                <h5 className = "trip-det-head">Patient Notes</h5>
                <hr></hr>
              </p>
            </div>
            <div id = "human-model">
              <div className = "limb">LA</div>
              <div className = "limb">RA</div>
              <div className = "limb">LL</div>
              <div className = "limb">RL</div>
            </div>
          </div>
          <div id = "chart-options">
            <button className = "chart-selection" onClick = {this.showBar}>
              <img src = {barchart} className = "btn-logo"></img>
            </button>
            <button className = "chart-selection" onClick = {this.showLine}>
              <img src = {linechart} data = {this.state.data} className = "btn-logo"></img>
            </button>
            <button className = "chart-selection" onClick = {this.showPie}>
              <img src = {piechart} className = "btn-logo"></img>
            </button>
            <button className = "chart-selection" onClick = {this.showScatter}>
              <img src = {doublelinechart} className = "btn-logo"></img>
            </button>
          </div>
        </div>
        <div id = "col-2">
          {(() => {
            switch (this.state.chart_option) {
              case 1:
                return <LC data = {this.state.data}/>;
              case 2:
                return <BC />;
              case 3:
                return <PC />;
              case 4:
                return <DLC />;
              default:
                return <LC />;
        }
      })()}
        </div>
        <div id = "col-3">
          <div id = "patient-list">
            <ul>
              {this.state.patients.map((the_patient) => 
                <button key = {the_patient.healthcarenum} 
                        onClick = {() => this.getTrips(the_patient.healthcarenum, the_patient.fname, the_patient.lname)}  
                        className = "patient-list-btns">{the_patient.fname} {the_patient.lname}
                </button>
              )}
            </ul>
          </div>
          <div className = "list-title">TRIPS</div>
          <div id = "trip-list">
            <ul>
              {trips.map((item, index) => {
                return <Card onClick = {this.helloAlert}>{item.id}</Card>
              })}
            </ul>
          </div>
        </div>
      </div>
      <Footer className = "footer"/>
    </div>

  );
}
  
}

export default Home;