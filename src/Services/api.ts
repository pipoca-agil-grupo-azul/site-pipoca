import axios from 'axios';

export const baseURL = axios.create({
    baseURL: "https://backend-pipoca.onrender.com",
    timeout: 5000,
})
