export function VideoCard() {
	return (
		<div>
			<div className="max-w-2xl mx-auto ">
				<div className="overflow-hidden rounded">
					<div className="relative overflow-hidden">
						<img src="https://img.youtube.com/vi/VfNVO6wwgDA/maxresdefault.jpg" />
						<span className="absolute px-1 text-xs text-white bg-black rounded bottom-1 right-2">
							5:56
						</span>
					</div>
					<div className="py-4 ">
						<div className="flex">
							<div className="flex-shrink-0 mr-4">
								<img
									src="https://yt3.ggpht.com/ytc/AAUvwnhe7O9GvvpT9Xpju21bHY9He61Tpv-GT56cKVipzjs=s176-c-k-c0x00ffffff-no-rj-mo"
									className="inline-block w-10 h-10 rounded-full"
									alt=""
								/>
							</div>
							<div>
								<h4 className="text-sm font-medium text-white line-clamp-2">
									Marvel Studios' Loki - Official Trailer 2 (2021) Tom Hiddleston,
									Owen Wilson
								</h4>
								<div className="flex sm:flex-col">
									<p className="text-sm text-gray-500">Marvel</p>
									<p className="block text-sm text-gray-500 md:hidden">
										&nbsp;•&nbsp;
									</p>
									<p className="text-sm text-gray-500">3M views • 1 day ago</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
