import FancyRoute from 'components/Route/FancyRoute'
import { Marketing, Home } from 'pages'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import VideoPage from './pages/VideoPage'
import Layout from './components/Layout/Layout'
import Login from 'components/Auth/Login'
import Register from './components/Auth/Register'
import axios from 'axios'
import { useVideo } from './context/videoContext'
import { useEffect } from 'react'
import { fetchingVideos, fetchVideosFail, fetchVideosSuccess } from './context/actions/videoActions'
import { useAuth } from 'context/userContext'

export default function App() {
	const { state: videoState, dispatch: videoDispatch } = useVideo()
	useEffect(() => {
		const fetch = async () => {
			videoDispatch(fetchingVideos(true))
			await axios
				.get('http://localhost:5000/api/videos')
				.then((res) => videoDispatch(fetchVideosSuccess(res.data)))
				.catch((error) => videoDispatch(fetchVideosFail(error)))
		}
		fetch()
	}, [videoDispatch])
	const { user, isAuthenticated } = useAuth()
	console.log('user present', user)
	console.log(videoState)

	if (!isAuthenticated) {
		console.log('loading spinner')
		return <p className="text-white">Loading....</p>
	}

	return (
		<>
			<Router>
				<Switch>
					<FancyRoute exact path="/home">
						<Layout>
							<Home />
						</Layout>
					</FancyRoute>
					<FancyRoute exact path="/auth/login" component={Login} />
					<FancyRoute exact path="/auth/register" component={Register} />
					<FancyRoute exact path="/" component={Marketing} />
					<FancyRoute exact path="/watch/:id">
						<Layout>
							<VideoPage />
						</Layout>
					</FancyRoute>
				</Switch>
			</Router>
		</>
	)
}
