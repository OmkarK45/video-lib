import VideoContainer from 'components/Video/VideoContainer'
import { WatchMore } from 'components/Video/WatchMore'
import { useVideo } from 'context/videoContext'
import { useParams } from 'react-router-dom'

export default function VideoPage() {
	const { videoState } = useVideo()
	const { videoID } = useParams()
	return (
		<div className="pt-6 mx-auto md:pt-0">
			<div className="flex flex-wrap">
				<div className="w-full pb-6 md:w-2/3 md:pb-0 md:pr-6">
					<VideoContainer videoID={videoID} />
				</div>
				<div className="w-full md:w-1/3">
					<h1 className="flex-1 text-xl font-semibold text-white">Watch more</h1>
					{videoState.loading ? <h1>Loading</h1> : <WatchMore />}
				</div>
			</div>
		</div>
	)
}
