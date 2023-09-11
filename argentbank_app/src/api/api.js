import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/v1',
    timeout: 10000,  // Vous pouvez définir un timeout si vous le souhaitez
    headers: { 'Content-Type': 'application/json' }
});

export default instance;