import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://www.googleapis.com/youtube/v3'

const options = {
    params: {
        // maxResults: '12',  
        // key: process.env.YOUTUBE_API_KEY
    },
    headers: {
        
    }
}

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
    // const [data, setData] = useState([])
    // const {searchTerm} = useParams();
    // (https://www.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&type=video&order=${order}&maxResults=${maxResult}&key=AIzaSyCbTsQhecq1pp2hNFC7d2_qTyj_Ja71hiU)
    // const src = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${searchTerm}&key=AIzaSyDuSa_snfrqupxMfqRmOU_NaH7utQtq988`
    // axios
    //   .get(src)
    //     .then((data) => setData(data.data.items))
  } 