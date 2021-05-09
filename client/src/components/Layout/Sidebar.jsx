import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { links } from './../../common/links'
import { Disclosure } from '@headlessui/react'
import { HiOutlineHome } from 'react-icons/hi'
import { RiPlayList2Line } from 'react-icons/ri'
import Navbar from './Navbar'

// @TODO-> Move this
const navigation = [
	{ name: 'Home', icon: HiOutlineHome, current: true, href: '/home' },
	{
		name: 'Playlists',
		icon: RiPlayList2Line,

		children: [
			{ name: 'New Trailers', href: '#' },
			{ name: 'Binge Watch', href: '#' },
			{ name: 'Old is gold', href: '#' },
			{ name: 'View All', href: '/playlists' },
		],
	},
]

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

							<Navbar navigation={navigation} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
