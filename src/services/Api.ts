import axios from "axios";

export const Api = axios.create({
    baseURL: 'https://server-bracket-gg.herokuapp.com/',
})