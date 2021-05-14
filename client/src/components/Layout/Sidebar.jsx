import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export function Sidebar() {
	return (
		<div className="flex h-screen ">
			<div className="hidden lg:flex lg:flex-shrink-0">
				<div className="flex flex-col w-64">
					<div className="flex flex-col flex-1 h-0 bg-[#222222]">
						<div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto ">
							<div className="flex items-center flex-shrink-0 px-4 ">
								<Link to="/home">
									<img
										className="w-auto h-8 "
										src="../../assets/icons/logo.svg"
										alt="Workflow"
									/>
								</Link>
							</div>

							<Navbar />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
