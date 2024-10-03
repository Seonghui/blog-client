import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.API_ENDPOINT,
    timeout: 1000,
});