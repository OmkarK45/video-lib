import PlaylistItemRow from 'components/Playlist/PlaylistItemRow'
import { useVideo } from 'context/videoContext'
import { Link, useParams } from 'react-router-dom'

export function WatchMore() {
	const { videoState } = useVideo()
	const { videoID } = useParams()

	const watchMoreVideos = videoState?.videos?.data.filter((v) => v.id !== videoID)

	return (
		<ul className="space-y-2">
			{watchMoreVideos &&
				watchMoreVideos.map((video) => {
					return (
						<li key={video.id} className="py-2 border-gray-500 border-b-1 ">
							<Link to={`/watch/${video.id}`}>
								<PlaylistItemRow
									imgSrc={video.thumbnail}
									title={video.title}
									channelName={video.channel}
								/>
							</Link>
						</li>
					)
				})}
		</ul>
	)
}
