import axios from 'axios'
import { Button } from 'components/ui/Button/Button'
import FormInput from 'components/ui/Form/FormInput'
import { REACT_APP_BACKEND } from 'context/uri'
import { useAuth } from 'context/userContext'
import { useFormik } from 'formik'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import AuthContainer from './AuthContainer'

export default function Register() {
	const [isLoading, setIsLoading] = useState(false)
	const history = useHistory()
	const SignUpSchema = Yup.object().shape({
		username: Yup.string()
			.min(2, 'Username should be atleast 3 characters long.')
			.max(24, "Woah! Username can't be that long.")
			.required('Username is required.'),
		email: Yup.string().email('Email must be valid.').required('Email is required.'),
		password: Yup.string().required('Password is required.'),
		confirmPassword: Yup.string().when('password', {
			is: (val) => (val && val.length > 0 ? true : false),
			then: Yup.string().oneOf([Yup.ref('password')], 'Both password need to be the same'),
		}),
	})

	const { setAuthState } = useAuth()

	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: SignUpSchema,
		onSubmit: (values) => handleSubmit(values),
	})

	const handleSubmit = async (values) => {
		const { username, email, password } = values

		setIsLoading(true)

		await axios
			.post(REACT_APP_BACKEND + `/api/auth/register`, {
				username,
				email,
				password,
			})
			.then((res) => {
				setIsLoading(false)
				if (res.status === 200) {
					setIsLoading(false)
					setAuthState(res.data)
					history.push('/home')
				}
				toast.success('Welcome to texthouse!')
				console.log(res.message)
			})
			.catch((err) => {
				console.log(err)
				setIsLoading(false)
				if (err?.response?.data.code === 'ALREADY_REGISTERED') {
					toast.error('User with that email is already registered.')
				} else {
					toast.error(err.response.data.msg)
				}
			})
	}
	return (
		<div className="min-h-screen">
			<AuthContainer title="Sign up">
				<form onSubmit={formik.handleSubmit} className="space-y-6">
					<FormInput
						label="Username"
						id="username"
						name="username"
						type="text"
						autoComplete="off"
						required={true}
						placeholder="Your username"
						onChange={formik.handleChange}
						value={formik.values.username}
						error={formik.errors.username && formik.errors.username}
						onBlur={formik.handleBlur}
						autoFocus
					/>
					<FormInput
						label="Email Address"
						name="email"
						type="email"
						id="email"
						required={true}
						placeholder="you@example.com"
						onChange={formik.handleChange}
						value={formik.values.email}
						error={formik.errors.email && formik.errors.email}
						onBlur={formik.handleBlur}
					/>
					<FormInput
						id="password"
						label="Password"
						name="password"
						type="password"
						required={true}
						placeholder="Password (min 6 characters)"
						onChange={formik.handleChange}
						value={formik.values.password}
						error={formik.errors.password && formik.errors.password}
						onBlur={formik.handleBlur}
					/>
					<FormInput
						label="Confirm Password"
						name="confirmPassword"
						id="confirmPassword"
						type="password"
						required={true}
						placeholder="Confirm Password"
						onChange={formik.handleChange}
						value={formik.values.confirmPassword}
						error={formik.errors.confirmPassword && formik.errors.confirmPassword}
						onBlur={formik.handleBlur}
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
