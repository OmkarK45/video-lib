/* eslint-disable no-unused-vars */
import { Button } from 'components/ui/Button/Button'
import { HiStar } from 'react-icons/hi'

export default function VideoChannel({ channel, channel_avatar }) {
	return (
		<div className="flex items-center justify-between py-4 border-b-2 border-gray-700">
			<div className="flex">
				<div className="flex-shrink-0 mr-4">
					<img
						src={channel_avatar}
						className="inline-block w-10 h-10 rounded-full"
						alt=""
					/>
				</div>
				<div>
					<h4 className="text-sm font-medium text-white line-clamp-2">{channel}</h4>
					<div className="flex sm:flex-col">
						<p className="text-sm text-gray-500">21K Subscribers</p>
					</div>
				</div>
			</div>
			<div>
				<Button variant="primary" icon={HiStar}>
					Subscribe
				</Button>
			</div>
		</div>
	)
}
