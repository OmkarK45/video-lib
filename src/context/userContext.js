/* eslint-disable no-unused-vars */
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext()

export function UserProvider({ children }) {
	const token = localStorage.getItem('token')
	const expiresAt = localStorage.getItem('expiresAt')
	const user = localStorage.getItem('user')
	const [authState, setAuthState] = useState({
		token,
		expiresAt,
		user: user ? JSON.parse(user) : {},
	})

	function setAuth({ token, user, expiresAt }) {
		localStorage.setItem('token', token)
		localStorage.setItem('user', JSON.stringify(user))
		localStorage.setItem('expiresAt', expiresAt)

		setAuthState({
			token,
			user,
			expiresAt,
		})
	}

	function logout() {
		localStorage.removeItem('user')
		localStorage.removeItem('expiresAt')
		localStorage.removeItem('token')
		setAuthState({})
	}
	function isAuthenticated() {
		const { token, expiresAt } = authState
		if (!token || !expiresAt) {
			return false
		}
		const hasExpired = new Date().getTime() / 1000 < expiresAt
		return hasExpired
	}
	useEffect(() => {
		const checkLoggedIn = async () => {
			try {
				await axios
					.get('http://localhost:5000/api/auth/user', {
						withCredentials: true,
					})
					.then((res) =>
						setAuthState({
							user: res.data.user,
							isAuthenticated: true,
						}).catch((error) => {
							setAuthState({
								user: {},
								isAuthenticated: false,
							})
						}),
					)
			} catch (error) {
				console.log(error)
			}
		}
		checkLoggedIn()
	}, [])
	return (
		<UserContext.Provider
			value={{
				authState,
				setAuthState: (authInfo) => setAuth(authInfo),
				logout,
				isAuthenticated,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}

export function useAuth() {
	return useContext(UserContext)
}
