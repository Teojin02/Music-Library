import axios from 'axios';
const KEY = 'AIzaSyCVAG8zDWwOwpqh0tDg9jDWi0jAk5-VqKA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})