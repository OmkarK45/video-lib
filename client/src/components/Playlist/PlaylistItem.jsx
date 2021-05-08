import { RiPlayList2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function PlaylistItem() {
	return (
		<div>
			<div className="relative">
				<img src="https://i.ytimg.com/vi/nW948Va-l10/maxresdefault.jpg" />
				<div className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-1/2 bg-black bg-opacity-75">
					<div>
						<RiPlayList2Line className="w-6 h-6 mx-auto" />
						<p>50+ Videos</p>
					</div>
				</div>
			</div>
			<div className="mt-2">
				<p className="font-medium text-white">Marvel Trailers</p>
				<Link to="#" className="text-xs text-gray-400 uppercase">
					View Full Playlist
				</Link>
			</div>
		</div>
	)
}