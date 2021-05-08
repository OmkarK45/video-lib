/* eslint-disable no-unused-vars */
import { getFormattedViews } from 'common/helpers'
import { Link } from 'react-router-dom'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import VideoDropdown from './VideoDropdown'

export function VideoCard({ video }) {
	const { id, title, description, duration, views, likes, dislikes, channel, thumbnail } = video
	return (
		<div className="max-w-2xl mx-auto ">
			<div className="overflow-hidden rounded">
				<Link to="/watch/videoID">
					<div className="relative overflow-hidden">
						<img src={thumbnail} />
						<span className="absolute px-1 text-xs text-white bg-black rounded bottom-1 right-2">
							{duration}
						</span>
					</div>
				</Link>
				<div className="py-4 ">
					<div className="flex">
						<div className="flex-shrink-0 mr-4">
							<Link to="watch/videoID">
								<img
									src="https://yt3.ggpht.com/ytc/AAUvwnhe7O9GvvpT9Xpju21bHY9He61Tpv-GT56cKVipzjs=s176-c-k-c0x00ffffff-no-rj-mo"
									className="inline-block w-10 h-10 rounded-full"
									alt=""
								/>
							</Link>
						</div>
						<div className="w-full ">
							<div className="flex justify-between">
								<Link to="/watch/videoID">
									<h4 className="text-sm font-medium text-white line-clamp-2">
										{title}
									</h4>
								</Link>
								<div>
									<VideoDropdown />
								</div>
							</div>
							<div className="flex sm:flex-col">
								<p className="text-sm text-gray-500">{channel}</p>

								<p className="block text-sm text-gray-500 md:hidden">
									&nbsp;•&nbsp;
								</p>
								<p className="text-sm text-gray-500">
									{getFormattedViews(views)} views • 1 day ago
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
