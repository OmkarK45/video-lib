import { Disclosure } from '@headlessui/react'
import clsx from 'clsx'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ navigation }) {
	return (
		<nav className="flex-1 px-2 mt-5 space-y-1">
			{navigation.map((item) =>
				!item.children ? (
					<div key={item.name}>
						<NavLink
							exact
							to={item.href}
							activeClassName="bg-gray-700 border-l-4 border-accent text-gray-100"
							className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-gray-100"
						>
							{item.name}
						</NavLink>
					</div>
				) : (
					<Disclosure as="div" key={item.name} className="space-y-1">
						{({ open }) => (
							<>
								<Disclosure.Button
									className={clsx(
										item.current
											? 'bg-gray-700 text-gray-100 border-l-4 border-accent'
											: 'text-gray-300 hover:bg-gray-700 hover:text-gray-100',
										'group w-full flex items-center pl-2 pr-1 py-2 text-sm font-medium focus:outline-none ',
									)}
								>
									{item.name}
									<svg
										className={clsx(
											open ? 'text-gray-400 rotate-90' : 'text-gray-300',
											'ml-auto h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150',
										)}
										viewBox="0 0 20 20"
										aria-hidden="true"
									>
										<path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
									</svg>
								</Disclosure.Button>
								<Disclosure.Panel className="space-y-1">
									{item.children.map((subItem) => (
										<Link
											key={subItem.name}
											to={subItem.href}
											className="flex items-center w-full py-2 pl-6 pr-2 text-sm font-medium text-gray-300 rounded-md group hover:bg-gray-700 hover:text-gray-100"
										>
											{subItem.name}
										</Link>
									))}
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				),
			)}
		</nav>
	)
}
