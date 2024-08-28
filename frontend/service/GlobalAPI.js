// const { default: axios } = require("axios");
import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
    },
});

// create new cv function
const CreateNewCV = (data) => axiosClient.post("/user-cvs", data);

// get user cv function
const GetUserCVs = (userEmail) =>
    axiosClient.get("/user-cvs?filter[userEmail][$eq]=" + userEmail);

export default {
    CreateNewCV,
    GetUserCVs,
};
