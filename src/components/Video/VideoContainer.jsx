import { Button } from 'components/ui/Button/Button'
import { HiOutlineThumbUp, HiOutlineThumbDown, HiOutlineShare, HiStar } from 'react-icons/hi'
import { RiPlayListAddLine } from 'react-icons/ri'
export default function VideoContainer() {
	return (
		<div className="w-full mx-auto">
			<div className="overflow-hidden rounded shadow">
				<div className="aspect-w-16 aspect-h-9">
					<iframe
						src="https://www.youtube.com/embed/4iig92MYTJs"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
				{/* Title and video likes */}
				<div className="flex flex-col py-4 space-y-5 border-b-2 border-gray-700 md:space-y-0 md:flex-row lg:justify-between ">
					<div className="space-y-2">
						<h1 className="flex-1 text-lg text-white md:text-xl">
							Don't go to school tomorrow
						</h1>
						<p className="text-sm text-gray-400 md:text-sm">
							1,087,285 views • Feb 15, 2021
						</p>
					</div>
					<div className="flex w-full text-white md:w-auto md:self-end">
						<div className="flex items-center justify-between w-full space-x-3 text-gray-400 md:w-auto">
							<div className="flex items-center">
								<HiOutlineThumbUp className="text-2xl" />{' '}
								<p className="ml-2 text-sm">41K</p>
							</div>
							<div className="flex items-center">
								<HiOutlineThumbDown className="text-2xl" />{' '}
								<p className="ml-2 text-sm">41K</p>
							</div>
							<div className="flex items-center">
								<HiOutlineShare className="text-2xl" />{' '}
								<p className="ml-2 text-sm uppercase">Share</p>
							</div>
							<div className="flex items-center">
								<RiPlayListAddLine className="text-2xl" />{' '}
								<p className="ml-2 text-sm">SAVE</p>
							</div>
						</div>
					</div>
				</div>

				{/* Channel bar with button */}
				<div className="flex items-center justify-between py-4 border-b-2 border-gray-700">
					<div className="flex">
						<div className="flex-shrink-0 mr-4">
							<img
								src="https://yt3.ggpht.com/ytc/AAUvwnhe7O9GvvpT9Xpju21bHY9He61Tpv-GT56cKVipzjs=s176-c-k-c0x00ffffff-no-rj-mo"
								className="inline-block w-10 h-10 rounded-full"
								alt=""
							/>
						</div>
						<div>
							<h4 className="text-sm font-medium text-white line-clamp-2">Marvel</h4>
							<div className="flex sm:flex-col">
								<p className="text-sm text-gray-500">21K Subscribers</p>
							</div>
						</div>
					</div>
					<div>
						<Button variant="primary" icon={HiStar}>
							Subscribe
						</Button>
					</div>
				</div>

				{/* Description */}
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
						<p className="text-base text-gray-500">
							I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
						</p>
					</dd>
				</div>
			</div>
		</div>
	)
}
