import axios from 'axios'
import FormInput from 'components/ui/Form/FormInput'
import { useAuth } from 'context/userContext'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Button } from './../ui/Button/Button'
import AuthContainer from './AuthContainer'
import { toast } from 'react-hot-toast'
export default function Login() {
	const history = useHistory()

	const [formError, setFormError] = useState({})

	const { setAuthState } = useAuth()

	const [isLoading, setIsLoading] = useState(false)

	const [data, setData] = useState({
		email: '',
		password: '',
	})

	const handleInputChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!data.email) {
			setFormError({
				...formError,
				emailError: 'Email is required',
			})
		}
		if (!data.password) {
			setFormError({
				...formError,
				passwordError: 'Password is required',
			})
		}
		setIsLoading(true)
		try {
			await axios
				.post(
					'http://localhost:5000/api/auth/login',
					{
						email: data.email,
						password: data.password,
					},
					{
						withCredentials: true,
					},
				)
				.then((res) => {
					// @TODO-> Show Toast on success
					setIsLoading(false)
					toast.success('Logged in!')
					console.log(res.data)
					setAuthState(res.data)
					history.push('/')
				})
				.catch((error) => {
					// @TODO -> Show toast on error
					console.log(error.response.data.msg)
					setIsLoading(false)
					toast.error(error.response.data.msg)
					setAuthState(null)
				})
		} catch (error) {
			setIsLoading(false)
		}
	}

	return (
		<div className="min-h-screen">
			<AuthContainer title="Sign in">
				<form onSubmit={handleSubmit} className="space-y-6">
					<FormInput
						label="Email Address"
						id="email"
						name="email"
						type="email"
						autoComplete="off"
						required={true}
						placeholder="you@example.com"
						onChange={handleInputChange}
						value={data.email}
						error={formError.emailError}
					/>
					<FormInput
						id="password"
						label="Password"
						name="password"
						type="password"
						required={true}
						placeholder="Password"
						onChange={handleInputChange}
						value={data.password}
						error={formError.passwordError}
					/>
					<div>
						<Button
							type="submit"
							isLoading={isLoading}
							loadingText="Signing you in"
							fullWidth
							size="md"
							variant="primary"
							className="py-3 mt-1"
						>
							Sign In
						</Button>
					</div>
				</form>
				<div className="mt-3 text-gray-300">
					<p>
						Don't have an account ? <Link to="/auth/register"> Sign up</Link>
					</p>
				</div>
			</AuthContainer>
			<div>
				<p className="text-center text-gray-500">&copy; 2021, DogeFlix</p>
			</div>
		</div>
	)
}
