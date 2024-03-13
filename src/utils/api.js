import axios from 'axios';


const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
    key:"AIzaSyDiKizhsumFoJCMPo1pBPS7rM0pPQuhNes",
    cx:"3565ec9a1b0344ef3"
}

export const fetchDatafromApi = async (payload) =>{
    const {data} = await axios.get(BASE_URL,{
        params:{...params , ...payload}
    })

    return data;
}