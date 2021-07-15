import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: { Token: process.env.VUE_APP_TOKEN }
});

export default http