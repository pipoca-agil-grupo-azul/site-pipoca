import axios from 'axios';

export const baseURL = axios.create({
    baseURL: "",
    timeout: 5000,
})
