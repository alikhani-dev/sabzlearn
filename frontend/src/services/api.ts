import axios from 'axios'
import Cookies from 'js-cookie'

const api = axios.create({
	timeout: 1000,
	baseURL: 'http://localhost:3000/v1',
	headers: { 'Content-Type': 'application/json' }
})

api.interceptors.request.use(function (config) {
	const token = Cookies.get('token')

	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	return config
})

export default api
