import axios from 'axios'

export const axiosBaseUrl = axios.create({
    baseURL: 'http://localhost:4000/'
})

