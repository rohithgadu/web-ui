import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:8090"
})

export default instance;