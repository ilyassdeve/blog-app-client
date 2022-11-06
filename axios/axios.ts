import axios from 'axios'

export const axiosBaseUrl = axios.create({
    baseURL: 'https://ilyass-blog-nest.onrender.com/'
})

