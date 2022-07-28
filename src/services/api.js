import axios from 'axios'

const api = axios.create({
    baseURL : "https://spiritfarer-recipes-api.vercel.app/" 
})

export default api;
