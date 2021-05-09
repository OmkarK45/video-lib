export default function PlaylistItemRow({ imgSrc, title, channelName }) {
	return (
		<div className="flex text-white">
			<div className="self-center flex-shrink-0 w-1/3 mr-4 md:w-1/5">
				<img src={imgSrc} />
			</div>
			<div>
				<h4 className="md:text-md">{title}</h4>
				<p className="mt-1 text-sm text-gray-400 md:text-base">{channelName}</p>
			</div>
		</div>
	)
}
