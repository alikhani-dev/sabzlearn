import api from '../services/api'
import endpoint from '../services/endpoint'

export const courseByNameApi = async (name: string) => {
	const response = await api.get(endpoint.course.one.replace(':shortName', name))
	return response.data
}
