import FancyRoute from 'components/Route/FancyRoute'
import { Marketing, Home, VideoPage, Playlists, Playlist } from 'pages'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Login from 'components/Auth/Login'
import Register from './components/Auth/Register'
import axios from 'axios'
import { useVideo } from './context/videoContext'
import { useEffect } from 'react'
import { fetchingVideos, fetchVideosFail, fetchVideosSuccess } from './context/actions/videoActions'
import { Toaster } from 'react-hot-toast'
import { usePlaylist } from 'context/playlistContext'
import { fetchPlaylistsFail, fetchPlaylistsSuccess } from 'context/actions/playlistActions'
import SEO from 'components/SEO'
import { REACT_APP_BACKEND } from 'context/uri'

export default function App() {
	const { videoDispatch } = useVideo()
	const { playlistDispatch } = usePlaylist()

	useEffect(() => {
		async function fetch() {
			videoDispatch(fetchingVideos(true))
			await axios
				.get(REACT_APP_BACKEND + '/api/videos')
				.then((res) => videoDispatch(fetchVideosSuccess(res.data)))
				.catch((error) => videoDispatch(fetchVideosFail(error)))
		}
		fetch()
	}, [videoDispatch])

	useEffect(() => {
		async function getPlaylistData() {
			await axios
				.get(REACT_APP_BACKEND + '/api/playlists', {
					withCredentials: true,
				})
				.then((res) => playlistDispatch(fetchPlaylistsSuccess(res.data.playlists)))
				.catch((error) => playlistDispatch(fetchPlaylistsFail(error)))
		}
		getPlaylistData()
	}, [playlistDispatch])

	return (
		<>
			<SEO title="DogeFlix | The Home of Trailers" />
			<Toaster
				position="bottom-right"
				reverseOrder={false}
				toastOptions={{
					className: 'bg-gray-800 text-white',
					success: {
						iconTheme: {
							primary: '#059669',
						},
					},
				}}
			/>

			<Router>
				<Switch>
					<FancyRoute exact path="/home">
						<Layout>
							<Home />
						</Layout>
					</FancyRoute>
					<FancyRoute exact path="/playlists">
						<Layout>
							<Playlists />
						</Layout>
					</FancyRoute>
					<FancyRoute exact path="/playlists/:id">
						<Layout>
							<Playlist />
						</Layout>
					</FancyRoute>
					<FancyRoute exact path="/auth/login" component={Login} />
					<FancyRoute exact path="/auth/register" component={Register} />
					<FancyRoute exact path="/" component={Marketing} />
					<FancyRoute exact path="/watch/:videoID">
						<Layout>
							<VideoPage />
						</Layout>
					</FancyRoute>
				</Switch>
			</Router>
		</>
	)
}
