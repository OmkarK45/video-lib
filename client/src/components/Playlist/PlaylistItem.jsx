import { RiPlayList2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function PlaylistItem({ imgSrc, playlistName, videos, _id }) {
	return (
		<Link to={`/playlists/${_id}`}>
			<div>
				<div className="relative">
					<img src={imgSrc} />
					<div className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-1/2 bg-black bg-opacity-75">
						<div>
							<RiPlayList2Line className="w-6 h-6 mx-auto" />
							<p>{videos.length} Videos</p>
						</div>
					</div>
				</div>
				<div className="mt-2">
					<p className="font-medium text-white">{playlistName}</p>
					<p className="text-xs text-gray-400 uppercase">View Full Playlist</p>
				</div>
			</div>
		</Link>
	)
}
