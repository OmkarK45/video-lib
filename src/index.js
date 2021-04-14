import ReactDOM from 'react-dom'
import App from './App'
import { VideoProvider } from './context/videoContext'
import './index.css'

ReactDOM.render(
	<VideoProvider>
		<App />
	</VideoProvider>,

	document.getElementById('root'),
)
