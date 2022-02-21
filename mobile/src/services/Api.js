import axios from "axios";

const API = axios.create({
    baseURL: 'http://local:3030/'
});

export default API;