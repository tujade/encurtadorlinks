import axios from "axios";


export const key = "d7a1e92e9b0446562bb5e337bec1f3e42eba3fcd"


const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`
  }
})

export default api; 