import axios from "axios"
import useUserStore from "../stores/userStore";

const url = import.meta.env.VITE_BASE_URL
const token = useUserStore.getState().token

const todoApi = axios.create({
    baseURL: `${url}/todosv2`,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export default todoApi;