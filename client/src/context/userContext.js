/* eslint-disable no-unused-vars */
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { REACT_APP_BACKEND } from './uri'

const UserContext = createContext()

export function UserProvider({ children }) {
	const user = localStorage.getItem('user')
	console.log('from localstorage', JSON.parse(user))
	const [authState, setAuthState] = useState({
		user: user ? JSON.parse(user) : {},
		isAuthenticated: user ? true : false,
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
					.get(REACT_APP_BACKEND + '/api/auth/user', {
						withCredentials: true,
						headers: {
							'Access-Control-Allow-Origin': '*',
							'Content-Type': 'application/json',
						},
					})
					.then((res) => {
						console.log('axios fired')
						setAuthState({
							user: res.data.user,
							isAuthenticated: true,
						})
					})
					.catch((error) => {
						console.log('Error Occured', error)
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
