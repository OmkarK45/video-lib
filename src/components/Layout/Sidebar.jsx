export function Sidebar() {
	return (
		<div className="flex h-screen ">
			<div className="hidden lg:flex lg:flex-shrink-0">
				<div className="flex flex-col w-64">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex flex-col flex-1 h-0 bg-gray-800">
						<div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto ">
							<div className="flex items-center flex-shrink-0 px-4 ">
								<img
									className="w-auto h-8 "
									src="../../assets/icons/logo.svg"
									alt="Workflow"
								/>
							</div>
							<nav className="flex-1 px-2 mt-5 space-y-1 bg-gray-800">
								{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
								<a
									href="/"
									className="flex items-center px-2 py-2 text-sm font-medium text-white bg-gray-700 rounded-md group"
								>
									{/* Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300" */}
									{/* icon classes w-6 h-6 mr-3 text-gray-300 */}
									Dashboard
								</a>

								<a
									href="/"
									className="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white group"
								>
									Team
								</a>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
