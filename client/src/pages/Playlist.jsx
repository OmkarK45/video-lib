import axios from 'axios'
import PlaylistItemRow from 'components/Playlist/PlaylistItemRow'
import { Button } from 'components/ui/Button/Button'
import { fetchPlaylistFail, fetchPlaylistSuccess } from 'context/actions/playlistActions'
import { usePlaylist } from 'context/playlistContext'
import { useVideo } from 'context/videoContext'
import toast from 'react-hot-toast'
import { HiOutlineTrash, HiOutlineX } from 'react-icons/hi'
import { Link, useParams } from 'react-router-dom'

function PlaylistHeader({ playlist }) {
	const { videoState } = useVideo()
	const { playlistDispatch } = usePlaylist()
	const firstVideo = videoState.videos.data.find((v) => v._id === playlist.videos[0])
	const { id } = useParams()
	const imgSrc = firstVideo && firstVideo.thumbnail
	const videos = []
	const { playlistState } = usePlaylist()

	videoState.videos.data.map((v) => {
		return playlist.videos.map((p) => {
			return v._id === p && videos.push(v)
		})
	})

	console.log('playlist state after removing', playlistState)
	async function handleRemove(video) {
		// perform axios.delete here
		await axios
			.patch(
				process.env.REACT_APP_BACKEND + '/api/playlist/remove-video',
				{
					videoID: video._id,
					playlistID: id,
				},
				{
					withCredentials: true,
				},
			)
			.then((res) => {
				toast.success('Video removed from playlist !')
				console.log(res)
				playlistDispatch(fetchPlaylistSuccess(res.data.updatedPlaylist))
			})
			.catch((error) => {
				toast.error('Something went wrong')
				playlistDispatch(fetchPlaylistFail(error))
			})
	}

	return (
		<div className="flex flex-wrap">
			<div className="w-full pb-6 space-y-2 md:w-2/5 md:pb-0 md:pr-6">
				<div>
					<img src={imgSrc} />
					<h1 className="text-xl font-medium text-white md:text-2xl">
						{playlist.playlistName}
					</h1>
					<p className="text-base text-gray-500 ">{playlist.videos?.length} Videos</p>
					<div className="flex">
						<Button variant="dark" icon={HiOutlineTrash}></Button>
					</div>
				</div>
			</div>
			<div className="w-full md:w-3/5">
				<ul className="space-y-2">
					{videos.length > 0
						? videos.map((video) => {
								return (
									<li key={video._id} className="py-2 border-b border-gray-600 ">
										<div className="flex">
											<Link to={`/watch/${video.id}`}>
												<PlaylistItemRow
													imgSrc={video.thumbnail}
													title={video.title}
													channelName={video.channel}
												/>
											</Link>
											<div className="flex items-center justify-center">
												<Button
													onClick={() => handleRemove(video)}
													variant="dark"
													icon={HiOutlineX}
												></Button>
											</div>
										</div>
									</li>
								)
						  })
						: 'You dont have any videos in this playlist'}
				</ul>
			</div>
		</div>
	)
}

export default function Playlist() {
	const { playlistState } = usePlaylist()
	const { id } = useParams()
	const playlist = playlistState.playlists.find((p) => p._id === id)
	return (
		<div className="container pt-6 mx-auto text-white">
			{playlistState.loading ? <div>Loading</div> : <PlaylistHeader playlist={playlist} />}
		</div>
	)
}
