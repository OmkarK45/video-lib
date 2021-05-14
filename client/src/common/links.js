import { HiOutlineHome } from 'react-icons/hi'
import { RiPlayList2Line } from 'react-icons/ri'

export const navigation = [
	{ name: 'Dashboard', icon: HiOutlineHome, current: true, href: '#' },
	{
		name: 'Playlists',
		icon: RiPlayList2Line,
		children: [
			{ name: 'New Trailers', href: '#' },
			{ name: 'Binge Watch', href: '#' },
			{ name: 'Old is gold', href: '#' },
		],
	},
]
