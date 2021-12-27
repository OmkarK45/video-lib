import axios from 'axios'
import { Button } from 'components/ui/Button/Button'
import { usePlaylist } from 'context/playlistContext'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { HiOutlinePlus } from 'react-icons/hi'
import Modal from '../ui/Modal'
import { fetchPlaylistsSuccess } from 'context/actions/playlistActions'
import { fetchPlaylistsFail } from './../../context/actions/playlistActions'
import { REACT_APP_BACKEND } from 'context/uri'

export default function AddToPlaylist({ setOpen, open, id }) {
	const [showInput, setShowInput] = useState(false)
	const { playlistState, playlistDispatch } = usePlaylist()
	function toggleInput() {
		setShowInput(!showInput)
	}

	async function handleSubmit(values) {
		await axios
			.post(REACT_APP_BACKEND + '/api/playlist/add-video', values, {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data)
				playlistDispatch(fetchPlaylistsSuccess(res.data.updatedPlaylists))
				toast.success('Video was added to playlist!')
				closeModal()
			})
			.catch((error) => {
				toast.error('Something went wrong.')
				closeModal()
				playlistDispatch(fetchPlaylistsFail(error))
			})
	}
	function closeModal() {
		setOpen(false)
	}

	console.log('from modal', playlistState.playlists.length)
	return (
		<>
			<Modal
				setOpen={setOpen}
				open={open}
				title="Add To Playlist"
				subtitle="Choose a playlist to add this video into."
				closeModal={closeModal}
			>
				<Formik
					initialValues={{
						videoID: id,
						newPlaylistName: '',
						selectedPlaylists: [],
					}}
					onSubmit={(values) => handleSubmit(values)}
				>
					<Form>
						<div role="group" aria-labelledby="checkbox-group">
							<ul className="space-y-3">
								{playlistState.playlists.length > 0 ? (
									playlistState.playlists.map((playlist) => {
										return (
											<li
												key={playlist._id}
												className="flex items-center p-3 space-x-4 "
											>
												<Field
													type="checkbox"
													name="selectedPlaylists"
													value={playlist._id}
													className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
												/>
												<p className="text-base text-white">
													{playlist.playlistName}
												</p>
											</li>
										)
									})
								) : (
									<>
										<div className="mt-5 text-white">
											<p>
												You currently don't have any playlists. Create one
												using the button below.
											</p>
										</div>
									</>
								)}

								{showInput && (
									<li>
										<Field
											type="text"
											name="newPlaylistName"
											placeholder="Playlist Name"
											className="relative block w-full px-3 py-2 text-black placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
										/>
									</li>
								)}
								<li className="flex items-center ">
									<Button
										variant="dark"
										icon={HiOutlinePlus}
										onClick={toggleInput}
									>
										Create New
									</Button>
								</li>
							</ul>
						</div>

						<div className="flex flex-col mt-5 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
							<Button fullWidth size="md" onClick={closeModal}>
								Cancel
							</Button>
							<Button type="submit" fullWidth size="md" variant="primary">
								Add
							</Button>
						</div>
					</Form>
				</Formik>
			</Modal>
		</>
	)
}
