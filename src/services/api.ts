import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://api.adviceslip.com',
})

export default Api