import axios from 'axios';

class RequestHandle {

    //returns the list of all patients
    getPatients(){
        return axios.get("https://pirfusix-solutions.herokuapp.com/patients/all");
    }

    //gets a specific patients trips
    getTrips(hcn){
        var request = "https://pirfusix-solutions.herokuapp.com/patients/" + hcn + "/trips"
        return axios.get(request);
    }

    //gets specific patients notes
    getNotes(hcn){
        var request = "https://pirfusix-solutions.herokuapp.com/patients/" + hcn + "/notes"
        return axios.get(request);
    }

    //gets specific patient conditions
    getConds(hcn){
        var request = "https://pirfusix-solutions.herokuapp.com/patients/" + hcn + "/conditions"
        return axios.get(request);
    }

    //adds condition for patient
    addCond(obj, hcn){
        var request = "https://pirfusix-solutions.herokuapp.com/patients/" + hcn + "/" + obj.CondID + "/addCond"
        return axios.post(request, obj);
    }

    //add note for patient
    addNote(obj, hcn){
        var request = "https://pirfusix-solutions.herokuapp.com/patients/" + hcn + "/" + obj.NoteID + "/addNote"
        return axios.post(request, obj);
    }
    //delete condition for patient using the delete button
    //delete note for patient using delete button

}

export default new RequestHandle();