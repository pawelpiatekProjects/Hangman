import axios from 'axios';

const instance = axios.create({
    baseURL:'https://hangman-c8d9f.firebaseio.com/'
});

export default instance;