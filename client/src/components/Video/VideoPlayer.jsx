import { useVideo } from 'context/videoContext'
import { useParams } from 'react-router-dom'

/* eslint-disable no-unused-vars */
export default function VideoPlayer({ videoID }) {
	console.log(videoID)
	return (
		<div className="aspect-w-16 aspect-h-9">
			<iframe
				src={`https://www.youtube-nocookie.com/embed/${videoID}?autoplay=1`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	)
}
