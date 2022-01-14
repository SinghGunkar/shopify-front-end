import axios from "axios"

let apiString = "https://testing-website-v3-backend.herokuapp.com/"

const inputValidationAPI = axios.create({
    baseURL: apiString,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    }
})

export default inputValidationAPI
