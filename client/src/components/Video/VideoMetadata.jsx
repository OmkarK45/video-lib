/* eslint-disable no-unused-vars */
export default function VideoMetadata({ title, date, views }) {
	return (
		<div className="space-y-2">
			<h1 className="flex-1 text-lg text-white md:text-xl">{title}</h1>
			<p className="text-sm text-gray-400 md:text-sm">
				{new Intl.NumberFormat('en-US').format(views)} views • Feb 15, 2021
			</p>
		</div>
	)
}
