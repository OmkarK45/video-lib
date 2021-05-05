import VideoMetadata from './VideoMetadata'
import VideoActions from './VideoActions'
import VideoChannel from './VideoChannel'
import VideoDescription from './VideoDescription'
import VideoPlayer from './VideoPlayer'

export default function VideoContainer() {
	return (
		<div className="w-full mx-auto">
			<div className="overflow-hidden rounded shadow">
				{/* Video embed */}
				<VideoPlayer />

				{/* Title and video likes */}
				<div className="flex flex-col py-4 space-y-5 border-b-2 border-gray-700 md:space-y-0 md:flex-row lg:justify-between ">
					<VideoMetadata />
					<VideoActions />
				</div>

				{/* Channel bar with button */}
				<VideoChannel />

				{/* Description */}
				<VideoDescription />
			</div>
		</div>
	)
}
