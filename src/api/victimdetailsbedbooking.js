import axios from "axios";

const API_URL = 'http://localhost:3002/ShelterRequests';

export const  addShelterRequest=async(victimdetails)=>{
    try{
    return await axios.post(API_URL, victimdetails);
    }
    catch(error){
        console.log('Error while adding victim',error.message);
    }
}
export const getvictim=async()=>{
    try{
    return await axios.get(API_URL);
    }
    catch(error){
        console.log('Error while getting victim',error.message);
    }
}