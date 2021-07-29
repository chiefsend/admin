import axios from "axios";
// import getKey from "@/auth";

const ax = axios.create({
  baseURL: process.env.VUE_APP_API || "http://localhost:6969",
  headers: {
    "Content-type": "application/json",
    // Authorization: `Bearer ${getKey().toString("base64")}`,
  },
});

export default ax;
