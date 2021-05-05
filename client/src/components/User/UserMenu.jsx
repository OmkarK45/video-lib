import { Menu, Transition } from '@headlessui/react'
import axios from 'axios'
import { useAuth } from 'context/userContext'
import { Fragment } from 'react'
import { HiOutlineLogout } from 'react-icons/hi'
import { toast } from 'react-hot-toast'
export default function UserMenu() {
	const { logout } = useAuth()
	async function handleLogout() {
		try {
			await axios
				.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true })
				.then((res) => {
					console.log('destroyed localstorage', res)
					toast.success('Logged out!')
					logout()
				})
				.catch((err) => {
					toast.error('There was some error logging you out')
					console.log(err)
				})
		} catch (error) {
			console.log(error)
			toast.error('There was some error logging you out')
		}
	}
	return (
		<div className=" justify-self-end">
			<Menu as="div" className="relative inline-block text-left">
				{({ open }) => (
					<>
						<Menu.Button className="inline-flex justify-center w-full text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
							<img
								className="w-8 h-8 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
								alt=""
							/>
						</Menu.Button>
						<Transition
							show={open}
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items
								static
								className="absolute right-0 w-56 mt-2 text-white origin-top-right bg-gray-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							>
								<div className="px-1 py-1 ">
									<Menu.Item>
										{({ active }) => (
											<button
												onClick={handleLogout}
												className={`${
													active
														? 'bg-gray-500 text-white'
														: 'text-gray-200'
												} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
											>
												<HiOutlineLogout className="w-5 h-5 mr-2" /> Sign
												out
											</button>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</>
				)}
			</Menu>
		</div>
	)
}
