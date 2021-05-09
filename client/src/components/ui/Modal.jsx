import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef } from 'react'

export default function Modal({ open, title, closeModal, subtitle = '', children }) {
	const cancelButtonRef = useRef()

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
								<h1 className="text-2xl italic font-bold text-white">{title}</h1>
								<p className="text-gray-500">{subtitle} </p>
								{children}
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
