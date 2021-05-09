import MarketingBanner from 'components/Marketing/MarketingBanner'
import MarketingHeader from 'components/Marketing/MarketingHeader'
import MarketingSuggestions from 'components/Marketing/MarketingSuggestions'
import { Button } from 'components/ui/Button/Button'
import { useState } from 'react'
import { VscMute, VscUnmute } from 'react-icons/vsc'

export default function Marketing() {
	const [mute, setMute] = useState(false)
	return (
		<div className="relative min-h-screen overflow-visible md:overflow-hidden">
			<div className="absolute inset-0 opacity-90 z-negative lg:opacity-90">
				<div className="absolute top-0 z-10 w-full py-3 ">
					<MarketingHeader />
				</div>
				<div className="absolute z-10 transform -translate-y-1/2 lg:left-36 top-72">
					<MarketingBanner />
				</div>
				<div className="absolute bottom-0 z-10 w-full transition-transform transform bg-black md:bg-opacity-10 backdrop-filter backdrop-blur-md translate-y-36 md:hover:translate-y-0">
					<Button
						className="absolute text-xl -top-10 right-10"
						onClick={() => setMute(!mute)}
						icon={mute ? VscUnmute : VscMute}
					/>
					<MarketingSuggestions />
				</div>
				<video
					src="https://res.cloudinary.com/video-lib/video/upload/v1618329024/Space_Jam__A_New_Legacy_Trailer_1_480p_24fps_H264-128kbit_AAC_eeau0l.mp4"
					autoPlay
					muted={mute}
					loop
					className="relative object-cover w-full h-full"
				></video>
			</div>
		</div>
	)
}
