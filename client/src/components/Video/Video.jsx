import { useVideo } from 'context/videoContext'
import VideoActions from './VideoActions'
import VideoChannel from './VideoChannel'
import VideoDescription from './VideoDescription'
import VideoMetadata from './VideoMetadata'
import VideoPlayer from './VideoPlayer'

export default function Video({ videoID }) {
	const { videoState } = useVideo()

	const foundVideo = videoState.videos.data.find((v) => v.id === videoID)
	console.log(foundVideo)
	return (
		<div className="overflow-hidden rounded shadow">
			<VideoPlayer videoID={foundVideo.id} />

			<div className="flex flex-col py-4 space-y-5 border-b-2 border-gray-700 md:space-y-0 md:flex-row lg:justify-between ">
				<VideoMetadata {...foundVideo} />
				<VideoActions {...foundVideo} />
			</div>

			<VideoChannel {...foundVideo} />

			<VideoDescription {...foundVideo} />
		</div>
	)
}
