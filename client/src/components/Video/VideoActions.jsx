import { HiOutlineThumbUp, HiOutlineThumbDown, HiOutlineShare } from 'react-icons/hi'
import { RiPlayListAddLine } from 'react-icons/ri'

export default function VideoActions() {
	return (
		<div className="flex w-full text-white md:w-auto md:self-end">
			<div className="flex items-center justify-between w-full space-x-3 text-gray-400 md:w-auto">
				<div className="flex items-center">
					<HiOutlineThumbUp className="text-2xl" /> <p className="ml-2 text-sm">41K</p>
				</div>
				<div className="flex items-center">
					<HiOutlineThumbDown className="text-2xl" /> <p className="ml-2 text-sm">41K</p>
				</div>
				<div className="flex items-center">
					<HiOutlineShare className="text-2xl" />{' '}
					<p className="ml-2 text-sm uppercase">Share</p>
				</div>
				<div className="flex items-center">
					<RiPlayListAddLine className="text-2xl" /> <p className="ml-2 text-sm">SAVE</p>
				</div>
			</div>
		</div>
	)
}
