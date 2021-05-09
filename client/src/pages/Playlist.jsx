import PlaylistItemRow from 'components/Playlist/PlaylistItemRow'
import { Button } from 'components/ui/Button/Button'
import { HiOutlineTrash } from 'react-icons/hi'

export default function Playlist() {
	return (
		<div className="container pt-6 mx-auto text-white">
			<div className="flex flex-wrap">
				<div className="w-full pb-6 space-y-2 md:w-2/5 md:pb-0 md:pr-6">
					<img src="https://i.ytimg.com/vi/nW948Va-l10/maxresdefault.jpg" />
					<h1 className="text-xl font-medium text-white md:text-2xl">
						Newest Trailers of 2021
					</h1>
					<p className="text-base text-gray-500 ">16 Videos</p>
					<div className="flex">
						<Button variant="dark" icon={HiOutlineTrash}></Button>
					</div>
				</div>
				<div className="w-full md:w-3/5">
					<ul className="space-y-2">
						<li className="py-2 border-b-2 border-gray-500 ">
							<PlaylistItemRow
								imgSrc="https://i.ytimg.com/vi/nW948Va-l10/maxresdefault.jpg"
								title="PRANK GONE WRONG (2021)(NOT CLICKBAIT)!!"
								channelName="AshPranks"
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
