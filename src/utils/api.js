import axios from 'axios';


const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
    key: "AIzaSyCfWg3YF4Qyjem6NLUSEO7m84rBAA0mwsk",
    cx: "27ccb940efd3840f3"
}

export const fetchDatafromApi = async (payload) =>{
    const {data} = await axios.get(BASE_URL,{
        params: {...params , ...payload}
    })

    return data;
};