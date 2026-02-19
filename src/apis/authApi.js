import axios from "axios"
const url = import.meta.env.VITE_BASE_URL
const authApi = axios.create({
    baseURL: `${url}/auth`
})

export default authApi;