import { PlaylistProvider } from 'context/playlistContext'
import { UserProvider } from 'context/userContext'
import ReactDOM from 'react-dom'
import App from './App'
import { VideoProvider } from './context/videoContext'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
// For some reason vercel refused to work with env vars. Will fix
ReactDOM.render(
	<HelmetProvider>
		<UserProvider>
			<VideoProvider>
				<PlaylistProvider>
					<App />
				</PlaylistProvider>
			</VideoProvider>
		</UserProvider>
	</HelmetProvider>,
	document.getElementById('root'),
)
