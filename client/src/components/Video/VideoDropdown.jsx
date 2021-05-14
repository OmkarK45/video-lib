import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { HiOutlineDotsVertical, HiOutlinePlus } from 'react-icons/hi'
import AddToPlaylist from '../Playlist/AddToPlaylist'
import { useAuth } from 'context/userContext'
import { useHistory } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function VideoDropdown({ id }) {
	const [modalOpen, setModalOpen] = useState(false)
	const { authState } = useAuth()
	const history = useHistory()

	function handleModal() {
		if (!authState.isAuthenticated) {
			history.push('/auth/login')
			toast.error('Please sign in to save videos')
		} else {
			setModalOpen(true)
		}
	}

	return (
		<div>
			<Menu as="div" className="relative inline-block text-left">
				{({ open }) => (
					<>
						<Menu.Button className="inline-flex justify-center w-full text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-gray-800 focus:ring-white">
							<HiOutlineDotsVertical className="w-5 h-5 text-white" />
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
												onClick={handleModal}
												className={`${
													active
														? 'bg-gray-500 text-white'
														: 'text-gray-200'
												} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
											>
												<HiOutlinePlus className="w-5 h-5 mr-2" /> Add to
												playlist
											</button>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</>
				)}
			</Menu>
			<AddToPlaylist open={modalOpen} setOpen={setModalOpen} id={id} />
		</div>
	)
}
