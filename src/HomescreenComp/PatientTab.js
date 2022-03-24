import React, {Component} from 'react';
import './PatientTab.css'
import Navig from './Navbar'
import Footer from './footer';
import Card from './Card';
import RequestHandle from '../RequestHelpers/RequestHandle';
import axios from 'axios';

/*
<ul>
{patients.map((item, index) => {
    return <Dropdown question = {item.name} answer = {item.info}></Dropdown>
})}
</ul> 
*/

class PatientTab extends Component{

    constructor(props){
        super(props);
        this.state = {
            patlist:[],
            triplist:[],
            notes:[],
            conds:[],
            current_pat: "",
            current_hcn: "",
            current_note: "",
            current_cond: ""
        }

        this.finddata = this.finddata.bind(this);
        this.addNote = this.addNote.bind(this);
    }

    componentDidMount(){
        RequestHandle.getPatients().then((response) => {
            var temp = []
            temp = response.data;
            this.setState({patlist: temp})
            console.log(this.state.patlist)
        })
        .catch(function (ex) {
            console.log("Response parsing failed, Error: ", ex)
        });;
    }

    finddata(){
        alert(this.state.patlist[0].fname);
    }

    getTrips(hcn, f, l){
        this.setState({current_hcn: hcn});
        RequestHandle.getTrips(hcn).then((response) => {
            var temp = []
            temp = response.data;
            this.setState({triplist: temp})
            this.setState({current_pat: f + " " + l})
            console.log(this.state.triplist)
        })
        .catch(function (ex) {
            console.log("Response parsing failed, Error: ", ex)
        });;
/////////////////////
        RequestHandle.getNotes(hcn).then((response2) => {
            var temp2 = []
            temp2 = response2.data;
            this.setState({notes: temp2})
            console.log(this.state.notes)
        })
        .catch(function (ex) {
            console.log("Response parsing failed, Error: ", ex)
        });;
////////////////////
        RequestHandle.getConds(hcn).then((response3) => {
            var temp3 = []
            temp3 = response3.data;
            this.setState({conds: temp3})
            console.log(this.state.conds)
        })
        .catch(function (ex) {
            console.log("Response parsing failed, Error: ", ex)
        });;
    }

    addNote(event){
        this.state.notes.push(this.state.current_note);

        const obj = {
            NoteID: Math.random().toString(36).slice(2),
            HCN: this.state.current_hcn,
            note: this.state.current_note
        }

        console.log(JSON.stringify(obj));

        RequestHandle.addNote(obj, this.state.current_hcn)
            .then(res => {
                console.log(obj);
                console.log(obj.data);
            }).catch(error => {
                console.log(error);
            });

            event.preventDefault();
    }

    validNote(item){
        let itemValue = item.target.value;
        this.setState({current_note: itemValue})
        this.forceUpdate();
    }

    addCond(event){
        const obj = {
            CondID: Math.random().toString(36).slice(2),
            HCN: this.state.current_hcn,
            cond: this.state.current_cond
        }

        console.log(JSON.stringify(obj));

        RequestHandle.addCond(obj, this.state.current_hcn)
            .then(res => {
                console.log(obj);
                console.log(obj.data);
            }).catch(error => {
                console.log(error);
            });

            event.preventDefault();
    }

    validCond(item){
        let itemValue = item.target.value;
        this.setState({current_cond: itemValue})
        this.forceUpdate();
    }

    deleteNote(){

    }

    deleteCond(){
        
    }

    render(){
        return(
            <div>
                <Navig/>
                <div id = "patient-nav">
                    <div id = "pat-list">
                        <ul>
                            {this.state.patlist.map((the_patient) => 
                                <button key = {the_patient.healthcarenum} onClick = {() => this.getTrips(the_patient.healthcarenum, the_patient.fname, the_patient.lname)} className = "patient-btns">{the_patient.fname} {the_patient.lname}</button>
                                //needs to be a button instead
                            )}
                        </ul>                        
                    </div>
                    <div id = "patient-profile">
                        <div id = "prev-trips">
                            <ul>
                                {this.state.triplist.map((the_trip) => 
                                    <Card id = {the_trip.tripID} eta = {the_trip.elapsedTime} patient = {this.state.current_pat} className = "patient-btns"></Card>
                                )}
                            </ul>  
                        </div>
                        <div id = "pat-info">
                            <h3 className = "info-header">Medical Conditions</h3>
                            <div id = "med-cond">
                                <div className = "add-container">
                                    <ul>
                                        {this.state.conds.map((condition) => 
                                            <li className = "condition">{condition.cond}<span className = "delete">-</span></li>
                                        )}
                                    </ul>
                                </div>
                                <div className = "submit-container">
                                    <input type = "text" className = "add-note" onChange = {(item) => this.validCond(item)} placeholder = "Add patient Condition"></input>
                                    <button className = "add" onClick = {(event) => this.addCond(event)}>+</button>
                                </div>
                            </div>
                            <h3 className = "info-header">Notes</h3>
                            <div id = "pat-notes">
                                <div className = "add-container">
                                    <ul>
                                        {this.state.notes.map((note) => 
                                            <li className = "note">{note.note}<span className = "delete">-</span></li>
                                            
                                        )}
                                    </ul>
                                </div>
                                <div className = "submit-container">
                                    <input type = "text" className = "add-note" onChange = {(item) => this.validNote(item)} placeholder = "Add patient Note"></input>
                                    <button className = "add" onClick = {(event) => this.addNote(event)}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default PatientTab;