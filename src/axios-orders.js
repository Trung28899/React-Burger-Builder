import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'https://react-my-burger-39ffa.firebaseio.com/'
});

export default instance; 