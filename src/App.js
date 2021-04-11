import { Header, Main, Sidebar } from 'components/Layout'
import FancyRoute from 'components/Route/FancyRoute'
import { Marketing, Home } from 'pages'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import VideoPage from './pages/VideoPage'

export default function App() {
	return (
		<>
			<Router>
				<Switch>
					<div className="flex h-screen overflow-hidden">
						<Sidebar />
						<div className="flex flex-col flex-1 w-0 overflow-hidden">
							<Header />
							<Main>
								<FancyRoute path="/" exact component={Home} />
								<FancyRoute path="/marketing" exact component={Marketing} />
								<FancyRoute path="/watch/:id" exact component={VideoPage} />
							</Main>
						</div>
					</div>
				</Switch>
			</Router>
		</>
	)
}
