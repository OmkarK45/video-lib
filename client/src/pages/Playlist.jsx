import PlaylistItem from 'components/Playlist/PlaylistItem'
import { Button } from 'components/ui/Button/Button'
import SectionHeader from 'components/ui/SectionHeader'

export default function Playlist() {
	return (
		<div className="relative text-white">
			<SectionHeader title="Your Playlists" description="Create and manage your playlists.">
				<Button variant="primary" size="md">
					Create New Playlist
				</Button>
			</SectionHeader>

			<div className="container grid gap-8 pt-6 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				<PlaylistItem />
				<PlaylistItem />
				<PlaylistItem />
				<PlaylistItem />
				<PlaylistItem />
				<PlaylistItem />
				<PlaylistItem />
				<PlaylistItem />
			</div>
		</div>
	)
}
