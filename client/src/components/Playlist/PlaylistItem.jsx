import { Button } from 'components/ui/Button/Button'
import { HiOutlineTrash } from 'react-icons/hi'
import { RiPlayList2Line } from 'react-icons/ri'

const items = [
	{ id: 1 },
	// More items...
]

export default function PlaylistItem() {
	return (
		<ul className="divide-y divide-gray-200">
			{items.map((item) => (
				<li key={item.id} className="px-4 my-4 bg-gray-800 rounded sm:px-0">
					<div className="flex px-2 py-4">
						<div className="w-1/2 mr-4 md:max-w-xs">
							<div className="relative border border-white">
								<img
									className="border border-white "
									src="https://i.ytimg.com/vi/nW948Va-l10/maxresdefault.jpg"
								/>
								<div className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-1/2 bg-black bg-opacity-75">
									<div>
										<RiPlayList2Line className="w-6 h-6 mx-auto" />
										<p>50+ Videos</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex-1">
							<h4 className="text-lg font-bold">Lorem ipsum</h4>
							<p className="mt-1">
								Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
								expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
							</p>
						</div>
					</div>
					<div className="px-4 py-3 bg-gray-700 sm:px-6">
						<div className="space-x-2">
							<Button size="sm" variant="dark">
								Delete Playlist
							</Button>
						</div>
						{/* Content goes here */}
						{/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
					</div>
				</li>
			))}
		</ul>
	)
}
