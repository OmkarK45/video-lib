import { Button } from 'components/ui/Button/Button'
import { IoArrowForwardCircleSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
export default function MarketingBanner() {
	return (
		<div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
			<h1>
				<span className="block text-sm font-semibold tracking-wide text-white uppercase sm:text-base lg:text-sm xl:text-base">
					Warner Bros
				</span>
				<span className="block mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
					<span className="block text-white">Space Jam</span>
					<span className="block text-white">A New Legacy</span>
				</span>
			</h1>
			<p className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
				Tunes vs. Goons. Watch LeBron James and Bugs Bunny in the new trailer for Space Jam:
				A New Legacy. In theaters and streaming on HBO Max – July 16
			</p>
			<div className="mt-8 space-x-3 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
				<Button size="lg">
					<p>Watch Now</p>{' '}
					<IoArrowForwardCircleSharp className="w-6 h-6 ml-3 text-accent" />
				</Button>
				<Link to="/home">
					<Button size="lg" variant="primary">
						Explore
					</Button>
				</Link>
			</div>
		</div>
	)
}
