import axios from "axios";

const API = axios.create({
    baseURL: 'https://ava-filmes.herokuapp.com/'
});

export default API;