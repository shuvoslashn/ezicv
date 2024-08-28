const { default: axios } = require("axios");

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
    },
});

const CreateNewResume = (data) => axiosClient.post("/user-cvs", data);

export default {
    CreateNewResume,
};
