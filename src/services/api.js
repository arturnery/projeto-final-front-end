import axios from 'axios'

export const api = axios.create({
  baseURL: "https://foodexplorer-api-tfpp.onrender.com"
})

