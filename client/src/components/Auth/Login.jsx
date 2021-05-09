import axios from 'axios'
import FormInput from 'components/ui/Form/FormInput'
import { useAuth } from 'context/userContext'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Button } from './../ui/Button/Button'
import AuthContainer from './AuthContainer'
import { toast } from 'react-hot-toast'
import * as Yup from 'yup'
import { useFormik } from 'formik'

export default function Login() {
	const history = useHistory()

	const { setAuthState } = useAuth()

	const [isLoading, setIsLoading] = useState(false)

	const SignInSchema = Yup.object().shape({
		email: Yup.string().email('Make sure email is valid.').required('Email is required'),
		password: Yup.string().min(4).required('Password is required.'),
	})

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: SignInSchema,
		onSubmit: (values) => handleSubmit(values),
	})

	const handleSubmit = async (values) => {
		const { email, password } = values
		setIsLoading(true)
		try {
			await axios
				.post(
					process.env.REACT_APP_BACKEND + `/api/auth/login`,
					{
						email,
						password,
					},
					{
						withCredentials: true,
					},
				)
				.then((res) => {
					setIsLoading(false)
					toast.success('Welcome!')
					setAuthState(res.data)
					history.push('/home')
				})
				.catch((error) => {
					console.log(error.response.status)
					if (error.response.status === 404) {
						toast.error('No account found with these credentials.')
						setIsLoading(false)
						setAuthState(null)
					}
				})
		} catch (error) {
			setIsLoading(false)
		}
	}

	return (
		<div className="min-h-screen">
			<AuthContainer title="Sign in">
				<form onSubmit={formik.handleSubmit} className="space-y-6">
					<FormInput
						label="Email Address"
						id="email"
						name="email"
						type="email"
						autoComplete="off"
						required={true}
						placeholder="you@example.com"
						onChange={formik.handleChange}
						value={formik.values.email}
						error={formik.errors.email && formik.errors.email}
						onBlur={formik.handleBlur}
						autoFocus
					/>

					<FormInput
						id="password"
						label="Password"
						name="password"
						type="password"
						required={true}
						placeholder="Password"
						onChange={formik.handleChange}
						value={formik.values.password}
						onBlur={formik.handleBlur}
						error={formik.errors.password && formik.errors.password}
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
