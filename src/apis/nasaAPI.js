import axios from "axios"

const apiString = "https://images-api.nasa.gov/search"

const nasaImageAPI = axios.create({
    baseURL: apiString,
    headers: {
        "Content-Type": "application/json"
    }
})

export default nasaImageAPI
