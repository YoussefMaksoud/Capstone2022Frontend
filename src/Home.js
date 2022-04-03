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

class Home extends Component {

  constructor(){
    super();

    this.state = {
      chart_option: 1,
      trips: [],
      patients: [],
      trip_data_string: [],
      current_trip_id: "",
      current_pat: "",
      data: []
    }

    var interval;

    this.showBar = this.showBar.bind(this);
    this.showLine = this.showLine.bind(this);
    this.showPie = this.showPie.bind(this);
    this.showScatter = this.showScatter.bind(this);
    this.displayTripInfo = this.displayTripInfo.bind(this);
    this.getPHTrip = this.getPHTrip.bind(this);
    this.getHTrip = this.getHTrip.bind(this);
    this.viewTripProgress = this.viewTripProgress.bind(this);
    this.finishTrip = this.finishTrip.bind(this);
    this.stopInterval = this.stopInterval.bind(this);
    this.startInterval = this.startInterval.bind(this);
  }

  componentDidMount(){
    this.getAllTrips();
    this.getAllPatients();
    this.startInterval();
  }

  stopInterval(){
    clearInterval(this.interval);
  }

  startInterval(){
    this.interval = setInterval(this.viewTripProgress, 100000);
  }

  componentWillUnmount(){
    this.stopInterval();
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

  getAllTrips(){
    RequestHandle.getAllTrips().then((response) => {
      var temp = [];
      temp = response.data;
      this.setState({trips: temp});
      console.log((this.state.trips));
    })
    .catch(function (ex) {
        console.log("Response parsing failed, Error: ", ex)
    });;
  }

  getAllPatients(){
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

  viewTripProgress(){
    this.startInterval();
    RequestHandle.currentTrip().then((response) => {
      if(response.data.length > 0){
        var temp = []
        temp = response.data;
        this.setState({current_trip_id: temp[0].dataid + " " + "Live"})
        this.setState({current_pat: temp[0].fname + " " + temp[0].lname})
        var temp_val = []

        for(var i = 0; i < temp.length; i++){
          var arr = JSON.parse(temp[i].readings);
          var time_arr = temp[i].times.replace('[', '');
          time_arr = time_arr.replace(']','');
          time_arr = time_arr.split(',');
          for(var j = 0; j < arr.length; j++){
            var obj = {
              value: arr[j],
              time: time_arr[j]
            }
            temp_val.push(obj);
          }
        }

        this.setState({data: temp_val})
        console.log(this.state.data);
    }else{
      this.setState({data: []});
      console.log(null);
    }
  })
  .catch(function (ex) {
      console.log("Response parsing failed, Error: ", ex)
  });;
  }

  finishTrip(){
    RequestHandle.finishTrip();
  }

  getHTrip(dataid, name){
    this.stopInterval();
    this.setState({current_trip_id: dataid});
    this.setState({current_pat: name})
    RequestHandle.getWifiData(dataid).then((response) => {
      var temp = []
      temp = response.data;
      var temp_val = []

      for(var i = 0; i < temp.length; i++){
        var arr = JSON.parse(temp[i].readings);
        var time_arr = temp[i].times.replace('[', '');
        time_arr = time_arr.replace(']','');
        time_arr = time_arr.split(',');
        for(var j = 0; j < arr.length; j++){
          var obj = {
            value: arr[j],
            time: time_arr[j]
          }
          temp_val.push(obj);
        }
      }

      this.setState({data: temp_val})
      console.log(this.state.data);
    }).catch(function (ex) {
      console.log("Response parsing failed, Error: ", ex)
    });;

  }

  getPHTrip(dataid, name){
    this.stopInterval();
    this.setState({current_trip_id: dataid});
    this.setState({current_pat: name})
    RequestHandle.getSatTrips(dataid).then((response) => {
      var temp = []
      temp = response.data;
      var temp_val = []

      for(var i = 0; i < temp.length; i++){
        var arr = JSON.parse(temp[i].readings);
        var time_arr = temp[i].times.replace('[', '');
        time_arr = time_arr.replace(']','');
        time_arr = time_arr.split(',');
        for(var j = 0; j < arr.length; j++){
          var obj = {
            value: arr[j],
            time: time_arr[j]
          }
          temp_val.push(obj);
        }
      }

      this.setState({data: temp_val})
      console.log(this.state.data);
    }).catch(function (ex) {
      console.log("Response parsing failed, Error: ", ex)
    });;

  }

  render(){
    return (  
    <div id = "overall">
      <Navig className = "navig-bar"/>
      <div id = "content-headers">
        <div className = "header-1">TRIP INFORMATION</div>
        <div className = "header-2">OXYGEN READINGS</div>
        <div className = "header-3">IN PROGRESS</div>
      </div>
      <div id = "home-content">
        <div id = "col-1">
          <div id = "trip-progress">
            <div id = "trip-details">
              <div id = "trip-id">
                <h5 className = "trip-det-head">Trip Identification Number: {this.state.current_trip_id}</h5>
              </div>
              <div id = "eta">
                <h5 className = "trip-det-head">Patient: {this.state.current_pat}</h5>
              </div>
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
                return <BC data = {this.state.data}/>;
              case 3:
                return <PC data = {this.state.data}/>;
              case 4:
                return <DLC data = {this.state.data}/>;
              default:
                return <LC />;
        }
      })()}
        </div>
        <div id = "col-3">
          <div id = "in-prog">
            <div>
              <button id = "view-trip" onClick = {()=> this.viewTripProgress()}>View</button>
              <button id = "done-trip" onClick = {() => {this.finishTrip()}}>Done</button>
            </div>
          </div>
          <div className = "list-title">TRIPS</div>
          <div id = "trip-list">
            <ul>
              {this.state.trips.map((item, index) => {
                return <Card id = {item.dataid} 
                            patient = {item.fname + " " + item.lname} 
                            onClickPH = {() => this.getPHTrip(item.dataid, item.fname + " " + item.lname)}
                            onClickH = {() => this.getHTrip(item.dataid, item.fname + " " + item.lname)}>{item.id}</Card>
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