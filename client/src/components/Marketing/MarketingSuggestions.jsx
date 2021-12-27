import { Button } from 'components/ui/Button/Button'
import { useVideo } from 'context/videoContext'
import { useRef } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function MovieCard({ title, poster, link }) {
	return (
		<Link to={link}>
			<div className="inline-block max-w-[250px] mx-auto">
				<div className="overflow-hidden rounded-lg ">
					<p className="font-bold text-center text-white">{title}</p>
					<div className="py-3 ">
						<img src={poster} className="rounded-lg" alt="" />
					</div>
				</div>
			</div>
		</Link>
	)
}

export default function MarketingSuggestions() {
	const movieContainerRef = useRef()
	console.log(movieContainerRef.current?.scrollLeft)
	function scroll(scrollOffset) {
		movieContainerRef.current.scrollLeft += scrollOffset
	}
	const { videoState } = useVideo()
	console.log(videoState)
	return (
		<div>
			<div className="px-4 py-3 mx-auto text-white max-w-7xl sm:px-6 lg:px-8">
				<div className="pb-3">
					<h3 className="text-2xl font-medium leading-6 ">Trailers for you</h3>
				</div>
				<div className="relative ">
					<div
						ref={movieContainerRef}
						className="w-full space-x-4 overflow-x-auto whitespace-nowrap movie-container"
					>
						<Button
							variant="dark"
							onClick={() => scroll(-120)}
							size="lg"
							className="left-0 hidden p-0 transform bg-gray-600 md:block md:absolute -translate-y-1/3 top-1/2"
							icon={FaChevronCircleLeft}
						/>
						<Button
							variant="dark"
							onClick={() => scroll(120)}
							size="lg"
							className="hidden p-0 transform bg-gray-600 md:block md:absolute -right-5 -translate-y-1/3 top-1/2"
							icon={FaChevronCircleRight}
						/>
						{featuredMovies.map((movie, idx) => {
							return (
								<MovieCard
									key={idx}
									title={movie.title}
									poster={movie.poster}
									link={movie.link}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export const featuredMovies = [
	{
		title: 'Spiderman: Homecoming',
		poster: 'https://img.youtube.com/vi/JfVOs4VSpmA/maxresdefault.jpg',
		link: '/watch/JfVOs4VSpmA',
	},
	{
		title: 'Thor 4 : Love and War',
		poster: 'https://img.youtube.com/vi/GczWEacU9uc/maxresdefault.jpg',
		link: '/watch/GczWEacU9uc',
	},
	{
		title: 'Sonic The Hedgehog 2',
		poster: 'https://img.youtube.com/vi/G5kzUpWAusI/maxresdefault.jpg',
		link: '/watch/G5kzUpWAusI',
	},
	{
		title: 'Dr Strange in the multiverse of madness',
		poster: 'https://img.youtube.com/vi/OhczQxPQYe8/maxresdefault.jpg',
		link: '/watch/OhczQxPQYe8',
	},
	{
		title: 'Venom : Let there be carnage',
		poster: 'https://img.youtube.com/vi/-FmWuCgJmxo/maxresdefault.jpg',
		link: '/watch/-FmWuCgJmxo',
	},
]
