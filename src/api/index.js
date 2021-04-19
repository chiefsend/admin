import axios from "axios";

const ax = axios.create({
    baseURL: process.env.VUE_APP_API || "http://localhost:6969",
    headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${btoa(process.env.VUE_APP_ADMIN_KEY)}`
    },
});

export default ax;
