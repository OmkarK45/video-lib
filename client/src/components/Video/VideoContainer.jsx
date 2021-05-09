import { useVideo } from 'context/videoContext'

import Video from './Video'

export default function VideoContainer({ videoID }) {
	const { videoState } = useVideo()
	return (
		<div className="w-full mx-auto">
			{videoState.loading ? (
				<h1 className="text-5xl text-white">Loading...</h1>
			) : (
				<Video videoID={videoID} />
			)}
		</div>
	)
}
