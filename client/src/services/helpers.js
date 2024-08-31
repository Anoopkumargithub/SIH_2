import Axios from "axios";

//const dev = true;
export const axios = Axios.create({
    baseURL:"http://localhost:8000"
});