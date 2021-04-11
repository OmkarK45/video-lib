import { Button } from 'components/ui/Button/Button'
import { HiStar } from 'react-icons/hi'

export default function VideoChannel() {
	return (
		<div className="flex items-center justify-between py-4 border-b-2 border-gray-700">
			<div className="flex">
				<div className="flex-shrink-0 mr-4">
					<img
						src="https://yt3.ggpht.com/ytc/AAUvwnhe7O9GvvpT9Xpju21bHY9He61Tpv-GT56cKVipzjs=s176-c-k-c0x00ffffff-no-rj-mo"
						className="inline-block w-10 h-10 rounded-full"
						alt=""
					/>
				</div>
				<div>
					<h4 className="text-sm font-medium text-white line-clamp-2">Marvel</h4>
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
