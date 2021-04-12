import axios from "axios";

const ax = axios.create({
    baseURL: process.env.API || "http://localhost:6969",
    headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${ btoa(process.env.ADMIN_KEY) }`
    },
});

export default ax;
