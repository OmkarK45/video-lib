import { Link } from 'react-router-dom'
import AuthContainer from './AuthContainer'
import { Button } from './../ui/Button/Button'
export default function Login() {
	return (
		<div className="min-h-screen">
			<AuthContainer
				title="Sign in"
				subtitle={
					<span>
						Or <Link to="/auth/sign-up">start your 14-day free trial</Link>
					</span>
				}
			>
				<form className="space-y-6" action="#" method="POST">
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-white">
							Email address
						</label>
						<div className="mt-1">
							<input
								id="email"
								name="email"
								type="email"
								required=""
								className="block w-full px-3 py-2 text-black placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
							/>
						</div>
					</div>

					<div>
						<label htmlFor="password" className="block text-sm font-medium text-white">
							Password
						</label>
						<div className="mt-1">
							<input
								id="password"
								name="password"
								type="password"
								required=""
								className="block w-full px-3 py-2 text-black placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							/>
						</div>
					</div>

					<div>
						<Button fullWidth size="md" variant="primary" className="py-3 mt-1">
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
