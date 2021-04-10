import { Transition } from '@headlessui/react'
import { HiOutlineX } from 'react-icons/hi'

export function MobileMenu({ mobileOpen, setMobileOpen }) {
	return (
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
			</Transition.Child>
			<div className="flex-shrink-0 w-14"></div>
		</Transition>
	)
}