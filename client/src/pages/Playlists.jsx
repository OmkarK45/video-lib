import PlaylistItem from 'components/Playlist/PlaylistItem'
import SectionHeader from 'components/ui/SectionHeader'
import { usePlaylist } from 'context/playlistContext'

export default function Playlists() {
	const { playlistState } = usePlaylist()
	console.log(playlistState)
	return (
		<div className="relative text-white">
			<SectionHeader title="Your Playlists" description="Create and manage your playlists." />
			<div className="container grid gap-8 pt-6 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{/* {playlistState.playlists.length > 0 } */}
				<PlaylistItem />
			</div>
		</div>
	)
}
