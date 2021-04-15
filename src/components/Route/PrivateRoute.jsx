import { useAuth } from 'context/userContext'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({ children, ...props }) {
	const { isAuthenticated } = useAuth()
	return (
		<Route
			{...props}
			render={() => (isAuthenticated ? 'You are logged in ' : <Redirect to="/" />)}
		>
			{children}
		</Route>
	)
}
