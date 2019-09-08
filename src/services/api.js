import axios from 'axios'
import hostPath from '../env'

const api = axios.create({
    baseURL: hostPath,
    headers: {
    }
})

export default api