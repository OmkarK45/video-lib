import { links } from './../../common/links'
import { NavLink } from 'react-router-dom'
import UserInfo from 'components/User/UserInfo'
export function Sidebar() {
	return (
		<div className="flex h-screen ">
			<div className="hidden lg:flex lg:flex-shrink-0">
				<div className="flex flex-col w-64">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex flex-col flex-1 h-0 bg-gray-800">
						<div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
							<div className="flex items-center flex-shrink-0 px-4 ">
								<img
									className="w-auto h-8 "
									src="../../assets/icons/logo.svg"
									alt="Workflow"
								/>
							</div>
							<nav className="flex-1 px-2 mt-5 space-y-1 bg-gray-800">
								{links.map((link) => {
									const Icon = link.icon
									return (
										<NavLink
											exact
											to={link.to}
											key={link.label}
											activeClassName="bg-gray-700 border-l-4 border-accent  text-gray-100"
											className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-gray-100"
										>
											<Icon className="w-6 h-6 mr-3" /> {link.label}
										</NavLink>
									)
								})}
							</nav>
						</div>
						<UserInfo />
					</div>
				</div>
			</div>
		</div>
	)
}
