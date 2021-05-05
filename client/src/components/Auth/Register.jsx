import axios from 'axios'
import { Button } from 'components/ui/Button/Button'
import FormInput from 'components/ui/Form/FormInput'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import AuthContainer from './AuthContainer'

export default function Register() {
	const [formError, setFormError] = useState({})

	const [isLoading, setIsLoading] = useState(false)

	const [data, setData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const handleInputChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (data.password !== data.confirmPassword) {
			setFormError({
				...formError,
				passwordMatchError: 'Please make sure that password matches',
			})
		}
		if (data.password.length < 6) {
			setFormError({
				...formError,
				passwordLengthError: 'Please make sure password is atleast 6 characters.',
			})
		}

		setIsLoading(true)
		try {
			// @TODO -> replace this with process.envs
			await axios
				.post('http://localhost:5000/api/auth/register', {
					username: data.username,
					email: data.email,
					password: data.password,
				})
				// handle redirection logic
				.then((res) => {
					setIsLoading(false)

					console.log(res.message)
				})
				.catch((err) => console.log(err.response.data))
		} catch (error) {
			setIsLoading(false)

			// @TODO -> notify something bad happened
			console.log(error)
		}
	}
	return (
		<div className="min-h-screen">
			<AuthContainer title="Sign up">
				<form onSubmit={handleSubmit} className="space-y-6">
					<FormInput
						label="Username"
						id="username"
						name="username"
						type="text"
						autoComplete="off"
						required={true}
						placeholder="Your username"
						onChange={handleInputChange}
						value={data.username}
						error={formError.usernameError}
					/>
					<FormInput
						label="Email Address"
						name="email"
						type="email"
						id="email"
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
						placeholder="Password (min 6 characters)"
						onChange={handleInputChange}
						value={data.password}
						error={formError.emailError}
					/>
					<FormInput
						label="Confirm Password"
						name="confirmPassword"
						id="confirmPassword"
						type="password"
						required={true}
						placeholder="Confirm Password"
						onChange={handleInputChange}
						value={data.confirmPassword}
						error={formError.emailError}
					/>
					<div>
						<Button
							type="submit"
							fullWidth
							size="md"
							variant="primary"
							className="py-3 mt-1"
							isLoading={isLoading}
							loadingText="Registering you..."
						>
							Sign Up
						</Button>
					</div>
				</form>
				<div className="mt-3 text-gray-300">
					<p>
						Already have an account ? <Link to="/auth/login"> Sign in</Link>
					</p>
				</div>
			</AuthContainer>
		</div>
	)
}
