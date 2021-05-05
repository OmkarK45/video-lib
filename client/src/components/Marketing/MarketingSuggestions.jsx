import { Button } from 'components/ui/Button/Button'
import { useRef } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
function MovieCard() {
	return (
		<div className="inline-block max-w-[250px] mx-auto">
			<div className="overflow-hidden rounded-lg ">
				<p className="font-bold text-center text-white">Mr Nobody (2022)</p>
				<div className="py-3 ">
					<img
						src="https://i.ytimg.com/vi/wZti8QKBWPo/maxresdefault.jpg"
						className="rounded-lg"
						alt=""
					/>
				</div>
			</div>
		</div>
	)
}

export default function MarketingSuggestions() {
	const movieContainerRef = useRef()
	console.log(movieContainerRef.current?.scrollLeft)
	function scroll(scrollOffset) {
		movieContainerRef.current.scrollLeft += scrollOffset
	}
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

						<MovieCard />
						<MovieCard />
						<MovieCard />
						<MovieCard />
						<MovieCard />
						<MovieCard />
						<MovieCard />
					</div>
				</div>
			</div>
		</div>
	)
}
