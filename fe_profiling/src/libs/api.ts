import axios from "axios"

export const API = axios.create({
    baseURL: 'http://localhost:5000/api/v1'
    //https://8srrs7bq-5000.asse.devtunnels.ms/api/v1
})