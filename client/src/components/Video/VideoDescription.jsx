/* eslint-disable no-unused-vars */
export default function VideoDescription({ description }) {
	return (
		<div className="pt-6">
			<dt className="text-lg">
				<button
					type="button"
					x-description="Expand/collapse question button"
					className="flex items-start justify-between w-full text-left text-gray-400"
					aria-controls="faq-0"
				>
					<span className="font-medium text-white">Description </span>
					<span className="flex items-center ml-6 h-7">
						{/* x-state:on="Open" x-state:off="Closed" :className="{ '-rotate-180': open, 'rotate-0': !(open) }"  */}
						<svg
							className="w-6 h-6 transform rotate-0"
							x-description="Expand/collapse icon, toggle classes based on question open state.

Heroicon name: outline/chevron-down"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							></path>
						</svg>
					</span>
				</button>
			</dt>

			<dd className="pr-12 mt-2" id="faq-0" x-show="open">
				<p className="text-base text-gray-400">
					I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Quas cupiditate laboriosam fugiat.
				</p>
			</dd>
		</div>
	)
}
