import { Transition } from '@headlessui/react'
import { HiOutlineHome, HiOutlineX } from 'react-icons/hi'
import { RiPlayList2Line } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

import { links } from './../../common/links'
import Navbar from './Navbar'

const navigation = [
	{ name: 'Dashboard', icon: HiOutlineHome, current: true, href: '#' },
	{
		name: 'Playlists',
		icon: RiPlayList2Line,

		children: [
			{ name: 'New Trailers', href: '#' },
			{ name: 'Binge Watch', href: '#' },
			{ name: 'Old is gold', href: '#' },
		],
	},
]

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
								className="w-auto h-8 "
								src="../../assets/icons/logo.svg"
								alt="Workflow"
							/>
						</div>
						<Navbar navigation={navigation} />
					</div>
				</div>
			</Transition.Child>
			<div className="flex-shrink-0 w-14"></div>
		</Transition>
	)
}
