import VideoContainer from 'components/Video/VideoContainer'
import { useParams } from 'react-router'

export default function VideoPage() {
	const { videoID } = useParams()
	console.log(videoID)
	return (
		<div className="pt-6 mx-auto md:pt-0">
			<div className="flex flex-wrap">
				<div className="w-full pb-6 md:w-2/3 md:pb-0 md:pr-6">
					<VideoContainer />
				</div>
				<div className="w-full md:w-1/3">
					<h1 className="flex-1 text-xl font-semibold text-white">Watch more</h1>
				</div>
			</div>
		</div>
	)
}
