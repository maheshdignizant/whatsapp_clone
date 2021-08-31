import axios from 'axios'

const Instance = axios.create({
    baseURL: "http://localhost:9000"
})

export default Instance;
