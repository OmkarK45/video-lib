import { Dialog, Transition } from '@headlessui/react'
import { Button } from 'components/ui/Button/Button'
import { Fragment, useRef } from 'react'

export default function MyModal({ setOpen, open }) {
	const cancelButtonRef = useRef()

	function closeModal() {
		setOpen(false)
	}

	return (
		<>
			<Transition show={open} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					initialFocus={cancelButtonRef}
					static
					open={open}
					onClose={closeModal}
				>
					<div className="min-h-screen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-60" />
						</Transition.Child>

						<span className="inline-block h-screen align-middle" aria-hidden="true">
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 rounded-md shadow-xl">
								<h1 className="text-2xl italic font-bold text-white">
									Add To Playlist
								</h1>
								<p className="text-gray-500">
									Choose a playlist to add this video to
								</p>
								<div className="mt-3">
									<ul>
										<li className="flex items-center p-3 space-x-4 ">
											<input
												type="checkbox"
												className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
											/>
											<p className="text-base text-white">
												Falana Dimka Playlist (50 Videos)
											</p>
										</li>
										<li className="flex items-center p-3 space-x-4 ">
											<input
												type="checkbox"
												className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
											/>
											<p className="text-base text-white">
												Falana Dimka Playlist (50 Videos)
											</p>
										</li>
										<li className="flex items-center p-3 space-x-4 ">
											<input
												type="checkbox"
												className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
											/>
											<p className="text-base text-white">
												Falana Dimka Playlist (50 Videos)
											</p>
										</li>
									</ul>
								</div>
								<div className="flex flex-col mt-5 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
									<Button fullWidth size="md" onClick={closeModal}>
										Cancel
									</Button>
									<Button fullWidth size="md" variant="primary">
										Add
									</Button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
