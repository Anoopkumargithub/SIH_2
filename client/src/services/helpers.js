import Axios from "axios";

const dev = true;
export const axios = Axios.create({
    baseURL: (dev ? "http://localhost:8000": "https://nexcarrier-i4r1.onrender.com")
});