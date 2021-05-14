import PlaylistItem from 'components/Playlist/PlaylistItem'
import SectionHeader from 'components/ui/SectionHeader'
import { usePlaylist } from 'context/playlistContext'
import { useVideo } from 'context/videoContext'

export default function Playlists() {
	const { playlistState } = usePlaylist()
	const { videoState } = useVideo()
	console.log(playlistState)
	return (
		<div className="relative text-white">
			<SectionHeader title="Your Playlists" description="Create and manage your playlists." />
			<div className="container grid gap-8 pt-6 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{playlistState.playlists.length > 0 ? (
					playlistState.playlists.map((playlist) => {
						const firstVideo = videoState.videos.data.find(
							(v) => v._id == playlist.videos[0],
						)

						return (
							<PlaylistItem
								key={playlist._id}
								imgSrc={
									firstVideo?.thumbnail ||
									'https://via.placeholder.com/150/000000/FFFFFF/?text=No Videos'
								}
								{...playlist}
							/>
						)
					})
				) : (
					<>
						<div className="text-white">
							<p>You dont have any playlists</p>
						</div>
					</>
				)}
			</div>
		</div>
	)
}
