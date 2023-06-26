import api from '../services/api'
import endpoint from '../services/endpoint'

type RegisterAPI = {
	name: string
	email: string
	username: string
	password: string
	confirmPassword: string
}

type RegisterAPIResponse = {
	user: {
		courses: []
		username: string
		email: string
		name: string
		role: 'ADMIN' | 'USER'
		_id: string
		createdAt: string
		updatedAt: string
		__v: number
	}
	accessToken: string
}

export const registerApi = async (data: RegisterAPI) => {
	const response = await api.post(endpoint.authentication.register, data)
	return response.data as RegisterAPIResponse
}

// * -----------------------------------------------------------------------

export type LoginAPI = {
	identifier: string
	password: string
}

export type LoginAPIResponse = {
	accessToken: string
}

export const loginApi = async (data: LoginAPI) => {
	const response = await api.post(endpoint.authentication.login, data)
	return response.data as LoginAPIResponse
}

// * -----------------------------------------------------------------------

export type AuthMeAPIResponse = RegisterAPIResponse['user']

export const authMeApi = async (token: string) => {
	const response = await api.get(endpoint.authentication.me, { headers: { Authorization: `Bearer ${token}` } })
	return response.data as AuthMeAPIResponse
}

// * -----------------------------------------------------------------------
