import { Button } from 'components/ui/Button/Button'
import UserMenu from 'components/User/UserMenu'
import { useAuth } from 'context/userContext'
import { Link } from 'react-router-dom'

export default function MarketingHeader() {
	const { authState } = useAuth()
	return (
		<div className="flex items-center justify-between px-3 mx-auto md:flex-row max-w-7xl">
			<div>
				<img className="w-auto h-8 " src="../../assets/icons/logo.svg" alt="Workflow" />
			</div>

			<div className="flex items-center space-x-5">
				{authState.isAuthenticated ? (
					<UserMenu />
				) : (
					<div>
						<Link to="/auth/login">
							<button className="text-white">Login</button>
						</Link>
						<Link to="/auth/register">
							<Button variant="primary" size="lg">
								Signup
							</Button>
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}
