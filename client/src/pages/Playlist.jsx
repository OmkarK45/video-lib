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
			<PlaylistItem />
			<PlaylistItem />
			<PlaylistItem />
			<PlaylistItem />
			<PlaylistItem />
			<PlaylistItem />
			<PlaylistItem />
		</div>
	)
}
