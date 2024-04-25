import axios from "axios";

const PrivateApi = axios.create({
    baseURL : "https://fakestoreapi.com",
})

export default PrivateApi;