import axios from 'axios'
import PlaylistItemRow from 'components/Playlist/PlaylistItemRow'
import { Button } from 'components/ui/Button/Button'
import Modal from 'components/ui/Modal'
import { fetchPlaylistFail, fetchPlaylistSuccess } from 'context/actions/playlistActions'
import { usePlaylist } from 'context/playlistContext'
import { useAuth } from 'context/userContext'
import { useVideo } from 'context/videoContext'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { HiOutlineTrash, HiOutlineX } from 'react-icons/hi'
import { Link, useHistory, useParams } from 'react-router-dom'

function PlaylistHeader({ playlist }) {
	const { videoState } = useVideo()
	const { playlistDispatch } = usePlaylist()
	const firstVideo = videoState.videos.data.find((v) => v._id === playlist.videos[0])
	const { id } = useParams()
	const imgSrc = firstVideo && firstVideo.thumbnail
	const videos = []

	const [modalOpen, setModalOpen] = useState(false)

	const { authState } = useAuth()

	videoState.videos.data.map((v) => {
		return playlist.videos.map((p) => {
			return v._id === p && videos.push(v)
		})
	})

	function handleModal() {
		if (!authState.isAuthenticated) {
			history.push('/auth/login')
			toast.error('Please sign in to save videos')
		} else {
			setModalOpen(true)
		}
	}

	async function handleRemove(video) {
		await axios
			.patch(
				process.env.REACT_APP_BACKEND + '/api/playlist/remove-video',
				{
					videoID: video._id,
					playlistID: id,
				},
				{
					withCredentials: true,
				},
			)
			.then((res) => {
				toast.success('Video removed from playlist !')
				console.log(res)
				playlistDispatch(fetchPlaylistSuccess(res.data.updatedPlaylist))
			})
			.catch((error) => {
				toast.error('Something went wrong')
				playlistDispatch(fetchPlaylistFail(error))
			})
	}

	return (
		<div className="flex flex-wrap">
			<div className="w-full pb-6 space-y-2 md:w-2/5 md:pb-0 md:pr-6">
				<div>
					<img src={imgSrc} />
					<h1 className="text-xl font-medium text-white md:text-2xl">
						{playlist.playlistName}
					</h1>
					<p className="text-base text-gray-500 ">{playlist.videos?.length} Videos</p>
					<div className="flex">
						<Button onClick={handleModal} variant="dark" icon={HiOutlineTrash}></Button>
					</div>
				</div>
			</div>
			<div className="w-full md:w-3/5">
				<ul className="space-y-2">
					{videos.length > 0
						? videos.map((video) => {
								return (
									<li key={video._id} className="py-2 border-b border-gray-600 ">
										<div className="flex">
											<Link to={`/watch/${video.id}`}>
												<PlaylistItemRow
													imgSrc={video.thumbnail}
													title={video.title}
													channelName={video.channel}
												/>
											</Link>
											<div className="flex items-center justify-center">
												<Button
													onClick={() => handleRemove(video)}
													variant="dark"
													icon={HiOutlineX}
												></Button>
											</div>
										</div>
									</li>
								)
						  })
						: 'You dont have any videos in this playlist'}
				</ul>
			</div>
			<DeletePlaylistModal setOpen={setModalOpen} open={modalOpen} id={id} />
		</div>
	)
}

function DeletePlaylistModal({ setOpen, open, id }) {
	const history = useHistory()

	async function handleDelete() {
		await axios
			.put(
				process.env.REACT_APP_BACKEND + '/api/playlist/delete',
				{
					playlistID: id,
				},
				{
					withCredentials: true,
				},
			)
			.then((res) => {
				closeModal()
				console.log(res)
				history.push('/playlists')
				toast.success('Playlist deleted !')
			})
			.catch((err) => {
				closeModal()
				console.log(err)
				history.push('/playlists')
				toast.error('Something went wrong while deleting playlist.')
			})
	}
	function closeModal() {
		setOpen(false)
	}

	return (
		<Modal
			setOpen={setOpen}
			open={open}
			title="Delete this playlist ?"
			subtitle="Are your sure you want to delete this playlist ? All of your videos in this playlist will be removed. This action cannot be undone."
			closeModal={closeModal}
		>
			<div className="flex flex-col mt-3 space-y-2 md:flex-row md:space-y-0 md:space-x-3">
				<Button onClick={closeModal} size="md" fullWidth>
					Cancel
				</Button>
				<Button onClick={handleDelete} size="md" variant="primary" fullWidth>
					Delete
				</Button>
			</div>
		</Modal>
	)
}

export default function Playlist() {
	const { playlistState } = usePlaylist()
	const { id } = useParams()
	const playlist = playlistState.playlists.find((p) => p._id === id)
	const history = useHistory()
	if (!playlist) {
		history.push('/playlists')
		toast.error('Playlist does not exists')
	}

	return (
		<div className="container pt-6 mx-auto text-white">
			{playlistState.loading ? <div>Loading</div> : <PlaylistHeader playlist={playlist} />}
		</div>
	)
}
