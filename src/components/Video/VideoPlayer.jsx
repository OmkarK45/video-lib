/* eslint-disable no-unused-vars */
export default function VideoPlayer({ link }) {
	return (
		<div className="aspect-w-16 aspect-h-9">
			<iframe
				src="https://www.youtube.com/embed/4iig92MYTJs?autoplay=1"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	)
}
