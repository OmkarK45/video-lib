/* eslint-disable no-unused-vars */
import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
import clsx from 'clsx'

export default function VideoDescription({ description }) {
	return (
		<div className="pt-6">
			<Disclosure as="div" className="pt-6">
				{({ open }) => (
					<>
						<dt className="text-lg">
							<Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
								<span className="font-medium text-white">Description</span>
								<span className="flex items-center ml-6 h-7">
									<HiChevronDown
										className={clsx(
											open ? '-rotate-180' : 'rotate-0',
											'h-6 w-6 transform',
										)}
										aria-hidden="true"
									/>
								</span>
							</Disclosure.Button>
						</dt>
						<Transition
							show={open}
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
						>
							<Disclosure.Panel static as="dd" className="pr-12 mt-2">
								<p className="text-base text-gray-500">{description}</p>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>
		</div>
	)
}
