import axios from 'axios'
import { apiUrl } from '../config'

const api = axios.create({
	baseURL: apiUrl
})
api.defaults.headers.common['authorization'] = 'Bearer ' + localStorage.access_token;
export default api
