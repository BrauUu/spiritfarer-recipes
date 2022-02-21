import axios from 'axios'

const api = axios.create({
    baseURL : "https://spiritfarer-recipes-api-8qxbcka3e-brauuu.vercel.app/" 
})

export default api;