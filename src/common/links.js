import { HiOutlineFilm, HiOutlineHome, HiOutlineThumbUp } from 'react-icons/hi'
import { MdHistory } from 'react-icons/md'
import { RiPlayList2Line } from 'react-icons/ri'
export const links = [
	{
		to: '/',
		label: 'Home',
		icon: HiOutlineHome,
	},
	{
		to: '/library',
		label: 'Library',
		icon: HiOutlineFilm,
	},
	{
		to: '/history',
		label: 'History',
		icon: MdHistory,
	},
	{
		to: '/liked',
		label: 'Liked Videos',
		icon: HiOutlineThumbUp,
	},
	{
		to: '/playlist',
		label: 'Playlist',
		icon: RiPlayList2Line,
	},
]
