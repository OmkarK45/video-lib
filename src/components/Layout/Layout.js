import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { HiOutlineX, HiOutlineMenuAlt1 } from 'react-icons/hi'
import Searchbar from 'components/ui/Searchbar'
import UserInfo from 'components/User/UserInfo'

export default function Layout() {
	const [mobileOpen, setMobileOpen] = useState(false)

	useEffect(() => {
		function handleEscape(event) {
			if (!mobileOpen) return

			if (event.key === 'Escape') {
				setMobileOpen(false)
			}
		}

		document.addEventListener('keyup', handleEscape)
		return () => document.removeEventListener('keyup', handleEscape)
	}, [mobileOpen])

	return (
		<>
			<div className="flex h-screen overflow-hidden ">
				{/* Off-canvas menu for mobile */}
				<Transition show={mobileOpen} unmount={false} className="fixed inset-0 z-40 flex">
					{/* Off-canvas menu overlay, show/hide based on off-canvas menu state. */}
					<Transition.Child
						unmount={false}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						{() => (
							<div className="fixed inset-0">
								<div
									onClick={() => setMobileOpen(false)}
									className="absolute inset-0 bg-gray-600 opacity-75"
								/>
							</div>
						)}
					</Transition.Child>

					{/* Off-canvas menu, show/hide based on off-canvas menu state. */}
					<Transition.Child
						unmount={false}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-full"
						className="relative flex flex-col justify-between flex-1 w-full max-w-xs bg-gray-900"
					>
						<div className="absolute top-0 right-0 p-1 -mr-14">
							<Transition.Child
								unmount={false}
								className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
								aria-label="Close sidebar"
								as="button"
								onClick={() => setMobileOpen(false)}
							>
								<HiOutlineX className="w-6 h-6 text-white" />
							</Transition.Child>
						</div>
						<div className="flex items-center flex-shrink-0 px-2 bg-gray-900">
							<div className="flex-1 pt-5 pb-4 overflow-y-auto">
								<div className="flex items-center flex-shrink-0 px-4">
									<img
										className="w-auto h-8"
										src="https://tailwindui.com/img/logos/workflow-logo-rose-500-mark-white-text.svg"
										alt="Workflow"
									/>
								</div>
								<nav className="px-2 mt-5 space-y-1">
									{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
									<a
										href="/"
										className="flex items-center px-2 py-2 text-base font-medium text-white bg-gray-800 rounded-md group"
									>
										{/* Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300" */}
										{/* Icon classes -> w-6 h-6 mr-4 text-gray-300 */}
										Dashboard
									</a>

									<a
										href="/"
										className="flex items-center px-2 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white group"
									>
										Team
									</a>
								</nav>
							</div>
						</div>
						<UserInfo />
					</Transition.Child>
					<div className="flex-shrink-0 w-14"></div>
				</Transition>

				{/* Static sidebar for desktop */}
				<div className="hidden lg:flex lg:flex-shrink-0">
					<div className="flex flex-col w-64">
						{/* Sidebar component, swap this element with another sidebar if you like */}
						<div className="flex flex-col flex-1 h-0 bg-gray-900">
							<div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto ">
								<div className="flex items-center flex-shrink-0 px-4 ">
									<img
										className="w-auto h-8 "
										src="../../assets/icons/logo.svg"
										alt="Workflow"
									/>
								</div>
								<nav className="flex-1 px-2 mt-5 space-y-1 bg-gray-900">
									{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
									<a
										href="/"
										className="flex items-center px-2 py-2 text-sm font-medium text-white bg-gray-800 rounded-md group"
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
				<div className="flex-1 overflow-auto focus:outline-none">
					<div className="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-gray-900 border-b border-gray-700 ">
						<button
							className="px-4 text-gray-400 focus:outline-none focus:bg-gray-700 focus:text-gray-600 lg:hidden"
							aria-label="Open sidebar"
							onClick={() => setMobileOpen(true)}
						>
							<HiOutlineMenuAlt1 className="w-6 h-6 transition duration-150 ease-in-out" />
						</button>
						{/* Search bar */}
						<div className="flex justify-between flex-1 px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
							<div className="flex flex-1 ">
								<Searchbar />
							</div>
						</div>
					</div>
					<main className="relative z-0 flex-1 min-h-screen p-8 overflow-y-auto bg-gray-900"></main>
				</div>
			</div>
		</>
	)
}
