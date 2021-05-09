import { Button } from 'components/ui/Button/Button'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import Modal from '../ui/Modal'

export default function AddToPlaylist({ setOpen, open }) {
	const [showInput, setShowInput] = useState(false)

	function toggleInput() {
		setShowInput(!showInput)
	}

	function handleSubmit(values) {
		console.log(values)
	}
	function closeModal() {
		setOpen(false)
	}

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
						playlistName: '',
						checked: [],
					}}
					onSubmit={(values) => handleSubmit(values)}
				>
					<Form>
						<div role="group" aria-labelledby="checkbox-group">
							<ul>
								<li className="flex items-center p-3 space-x-4 ">
									<Field
										type="checkbox"
										name="checked"
										value="One"
										className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
									/>
									<p className="text-base text-white">
										Falana Dimka Playlist (50 Videos)
									</p>
								</li>
								<li className="flex items-center p-3 space-x-4 ">
									<Field
										type="checkbox"
										name="checked"
										value="Two"
										className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
									/>
									<p className="text-base text-white">Bangers</p>
								</li>
								{showInput && (
									<li>
										<Field
											type="text"
											name="playlistName"
											placeholder="Playlist Name"
											className="relative block w-full px-3 py-2 text-black placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
										/>
									</li>
								)}
								<li className="flex items-center p-3 space-x-4 ">
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
