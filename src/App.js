import FancyRoute from 'components/Route/FancyRoute'
import { Marketing, Home, Auth } from 'pages'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import VideoPage from './pages/VideoPage'
import Layout from './components/Layout/Layout'

export default function App() {
	return (
		<>
			<Router>
				<Switch>
					<FancyRoute exact path="/home">
						<Layout>
							<Home />
						</Layout>
					</FancyRoute>
					<FancyRoute exact path="/auth" component={Auth} />
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
