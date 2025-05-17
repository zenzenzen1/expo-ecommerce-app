import axios from "axios";

const BASE_URL = 'http://192.168.1.137:8000/'

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;