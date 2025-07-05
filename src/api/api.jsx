import axios  from "axios";
const url = 'https://api.jamendo.com/v3.0/tracks/?client_id=aa2a5ea7&format=json&limit=10';


export const getTracks = async () => {
    try{
        const response = await axios.get(url);
        console.log(response.data.results);
        return response.data.results;
    }catch(err){
        console.error(err);
    }
}