import axios from 'axios';

const KEY = 'AIzaSyDkqW0ETM0Ri0XJLxOFNQTF9Q8evBr3zkQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})