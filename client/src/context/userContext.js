/* eslint-disable no-unused-vars */
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext()

export function UserProvider({ children }) {
	const user = localStorage.getItem('user')
	console.log('from localstorage', JSON.parse(user))
	const [authState, setAuthState] = useState({
		user: user ? JSON.parse(user) : {},
		isAuthenticated: false,
	})

	function setAuth({ user }) {
		localStorage.setItem('user', JSON.stringify(user))

		setAuthState({
			user,
			isAuthenticated: user && user.userID ? true : false,
		})
	}

	function logout() {
		localStorage.removeItem('user')
		localStorage.removeItem('expiresAt')
		setAuthState({})
	}
	useEffect(() => {
		const checkLoggedIn = async () => {
			try {
				await axios
					.get('http://localhost:5000/api/auth/user', {
						withCredentials: true,
					})
					.then((res) => {
						console.log('axios fired')
						setAuthState({
							user: res.data.user,
							isAuthenticated: true,
						})
					})
					.catch((error) => {
						setAuthState({
							user: {},
							isAuthenticated: false,
						})
					})
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
			}}
		>
			{children}
		</UserContext.Provider>
	)
}

export function useAuth() {
	return useContext(UserContext)
}
