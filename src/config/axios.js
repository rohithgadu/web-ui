import axios from "axios";

// change the baseURL
const instance = axios.create({
    baseURL: "http://localhost:8090"
})

export default instance;