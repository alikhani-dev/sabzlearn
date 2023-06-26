import { useMutation } from '@tanstack/react-query'
import { authMeApi, loginApi } from '../api/auth.api'
import { useAuth } from '../context/AuthProvider'
import endpoint from '../services/endpoint'

const useAuthMeQuery = () => {
	return useMutation({ mutationFn: authMeApi, mutationKey: [endpoint.authentication.me] })
}

const useLoginServiceQuery = () => {
	const { login } = useAuth()

	return useMutation({
		mutationFn: loginApi,
		mutationKey: [endpoint.authentication.login],
		onSuccess({ accessToken }) {
			login(accessToken)
		}
	})
}

export const useAuthQuery = {
	getMe: useAuthMeQuery,
	login: useLoginServiceQuery
}
