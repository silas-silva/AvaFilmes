/* eslint-disable */
import axios from "axios";

const API = axios.create({
    baseURL: 'http://192.168.1.7:3030/'
});

export default API;