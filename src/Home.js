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
      trip_data_string: []
    }

    this.showBar = this.showBar.bind(this);
    this.showLine = this.showLine.bind(this);
    this.showPie = this.showPie.bind(this);
    this.showScatter = this.showScatter.bind(this);
    this.displayTripInfo = this.displayTripInfo.bind(this);
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
        console.log(this.state.trip_data_string)
    })
    .catch(function (ex) {
        console.log("Response parsing failed, Error: ", ex)
    });;
  }

  helloAlert(){
    alert("Hello World")
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
                <h5 className = "trip-det-head">Trip Identification Number:</h5>
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
              <img src = {linechart} className = "btn-logo"></img>
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
                return <LC />;
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
              {patients.map((item, index) => {
                return <Dropdown question = {item.name} answer = {item.info}></Dropdown>
              })}
            </ul>
          </div>
          <div className = "list-title">TRIPS</div>
          <div id = "trip-list">
            <ul>
              {trips.map((item, index) => {
                return <Card onClick = {this.displayTripInfo}>{item.id}</Card>
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