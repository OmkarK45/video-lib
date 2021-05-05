import { Button } from 'components/ui/Button/Button'
import { useLocation } from 'react-router-dom'

export default function Auth() {
	const location = useLocation()
	console.log(location)
	return (
		<div className="flex flex-col justify-center min-h-screen py-12 bg-gray-900 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<img
					className="w-auto h-12 mx-auto"
					src="../assets/icons/logo.svg"
					alt="Workflow"
				/>
			</div>

			<div className="mt-8 text-white sm:mx-auto sm:w-full sm:max-w-md">
				<div className="px-4 py-8 bg-gray-800 shadow sm:rounded-lg sm:px-10">
					<h1 className="mb-5 text-4xl italic font-bold tracking-tight text-white">
						Sign in
					</h1>
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
							<label htmlFor="password" className="block text-sm font-medium ">
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
				</div>
			</div>
		</div>
	)
}
