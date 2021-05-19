import SEO from 'components/SEO'
import { VideoGrid } from 'components/Video/VideoGrid'

export default function Home() {
	return (
		<div>
			<SEO title="Dogeflix | The Home of Trailers" />

			<VideoGrid />
		</div>
	)
}
