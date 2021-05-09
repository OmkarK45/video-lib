import { HiOutlineThumbUp, HiOutlineThumbDown } from 'react-icons/hi'
import { RiPlayListAddLine } from 'react-icons/ri'
import { getFormattedViews } from 'common/helpers'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router'
import { useAuth } from 'context/userContext'
import { useState } from 'react'
import AddToPlaylist from './../Playlist/AddToPlaylist'

export default function VideoActions({ likes, dislikes, id }) {
	const [modalOpen, setModalOpen] = useState(false)
	const { authState } = useAuth()
	const history = useHistory()

	function handleModal() {
		if (!authState.isAuthenticated) {
			history.push('/auth/login')
			toast.error('Please sign in to save videos')
		} else {
			setModalOpen(true)
		}
	}
	return (
		<div className="flex w-full text-white md:w-auto md:self-end">
			<div className="flex items-center justify-between w-full space-x-3 text-gray-400 md:w-auto">
				<button className="flex items-center">
					<HiOutlineThumbUp className="text-2xl" />
					<p className="ml-2 text-sm">{getFormattedViews(likes)}</p>
				</button>
				<button className="flex items-center">
					<HiOutlineThumbDown className="text-2xl" />
					<p className="ml-2 text-sm">{getFormattedViews(dislikes)}</p>
				</button>

				<button onClick={handleModal} className="flex items-center">
					<RiPlayListAddLine className="text-2xl" />
					<p className="ml-2 text-sm font-medium">SAVE</p>
				</button>
			</div>
			<AddToPlaylist open={modalOpen} setOpen={setModalOpen} id={id} />
		</div>
	)
}
