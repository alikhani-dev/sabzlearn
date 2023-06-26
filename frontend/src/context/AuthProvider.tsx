import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { AuthMeAPIResponse, authMeApi } from '../api/auth.api'
import { useAuthQuery } from '../hooks/useAuth.query'

type Auth = {
	login: (token: string, user: AuthMeAPIResponse) => void
	logout: () => void
} & ({ user?: null | AuthMeAPIResponse; isLoggedIn: false } | { user: AuthMeAPIResponse; isLoggedIn: true })

const AuthContext = createContext<Auth>({
	isLoggedIn: false,
	user: null,
	login() {},
	logout() {}
})

export const useAuth = () => useContext(AuthContext)

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<AuthMeAPIResponse | null>(null)
	const [token, setToken] = useState<string | null>(null)
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const getMeQuery = useAuthQuery.getMe()

	const login = useCallback((token: string, user: AuthMeAPIResponse) => {
		setUser(user)
		setToken(token)
		setIsLoggedIn(true)
		Cookies.set('token', token)
	}, [])

	const logout = useCallback(() => {
		setUser(null)
		setToken(null)
		setIsLoggedIn(false)
		Cookies.remove('token')
	}, [])

	useEffect(() => {
		const token = Cookies.get('token')

		if (token) {
			const getMe = async () => {
				const user = await getMeQuery.mutateAsync(token)
				setUser(user)
				setToken(token)
				setIsLoggedIn(true)
			}

			getMe()
		}
	}, [])

	return <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>{children}</AuthContext.Provider>
}

export default AuthProvider
