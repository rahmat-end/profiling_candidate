import axios from "axios"

export const API = axios.create({
    baseURL: 'https://690c-2001-448a-2082-3c1d-749a-86eb-eb03-462d.ngrok-free.app/api/v1'
})