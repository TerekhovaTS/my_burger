import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-18d62.firebaseio.com/'
});

export default instance;