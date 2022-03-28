import axios from 'axios';

class RequestHandle {

    //returns the list of all patients
    getPatients(){
        return axios.get("https://pirfusix-solutions.herokuapp.com/patients/all");
    }

    //gets a specific patients trips
    getTrips(hcn){
        var request = "https://pirfusix-solutions.herokuapp.com/trips/pat/" + hcn;
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

    //get all trips for the trips tab
    getAllTrips(){
        var request = "https://pirfusix-solutions.herokuapp.com/trips/all"
        return axios.get(request);
    }

    //get data for a trip
    getWifiData(id){
        var request = "https://pirfusix-solutions.herokuapp.com/trips/H/" + id;
        return axios.get(request);
    }

    getSatTrips(id){
        var request = "https://pirfusix-solutions.herokuapp.com/trips/PH/" + id;
        return axios.get(request);
    }

    //delete an added note
    deleteNote(id){
        var request = "https://pirfusix-solutions.herokuapp.com/patients/notes/delete/" + id
        return axios.delete(request);
    }

    deleteCond(id){
        var request = "https://pirfusix-solutions.herokuapp.com/patients/conditions/delete/" + id
        return axios.delete(request);
    }

    getLoginInfo(){
        var request = "https://pirfusix-solutions.herokuapp.com/login/all"
        return axios.get(request);
    }

    finishTrip(){
        var request = "https://pirfusix-solutions.herokuapp.com/trips/complete";
        return axios.delete(request);
    }

    currentTrip(){
        var request = "https://pirfusix-solutions.herokuapp.com/trips/live"
        return axios.get(request);
    }
    
}

export default new RequestHandle();