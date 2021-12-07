import axios from 'axios';

const instanceAPI = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Client-ID RfeHT-isj-tM5W7h07PHlC7EYv1gPObDf01ME2Wmv3o',
  },
});

export default instanceAPI;