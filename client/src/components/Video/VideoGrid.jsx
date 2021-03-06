import VideoCardSkeleton from 'components/Placeholder/VideoCardSkeleton'
import { VideoCard } from './VideoCard'
import { useVideo } from 'context/videoContext'
export function VideoGrid() {
	const { videoState } = useVideo()
	const { loading, videos } = videoState
	console.log('videos', videoState.videos.data)
	return (
		<>
			<div className="grid grid-cols-1 gap-8 pt-6 mx-auto md:pt-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
				{loading ? (
					<>
						{Array.from(Array(10).keys()).map((_, idx) => {
							return <VideoCardSkeleton key={idx} />
						})}
					</>
				) : (
					<>
						{videos.data &&
							videos?.data.map((video) => {
								return <VideoCard key={video.id} video={video} />
							})}
					</>
				)}
			</div>
		</>
	)
}
