import { PlaylistProvider } from 'context/playlistContext'
import { UserProvider } from 'context/userContext'
import ReactDOM from 'react-dom'
import App from './App'
import { VideoProvider } from './context/videoContext'
import './index.css'

ReactDOM.render(
	<UserProvider>
		<VideoProvider>
			<PlaylistProvider>
				<App />
			</PlaylistProvider>
		</VideoProvider>
	</UserProvider>,
	document.getElementById('root'),
)
