import axios from 'axios'
import { apiUrl } from '../config'


const api = axios.create({
	baseURL: apiUrl
})

api.interceptors.request.use(req => {
	req.headers['authorization'] = 'Bearer ' + localStorage.access_token
	return req
})
export default api
