import { createContext, useContext, useReducer } from 'react'
import videoReducer, { initialState } from './reducers/videoReducer'

const VideoContext = createContext()

export const VideoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(videoReducer, initialState)

	return (
		<VideoContext.Provider value={{ videoState: state, videoDispatch: dispatch }}>
			{children}
		</VideoContext.Provider>
	)
}

export function useVideo() {
	return useContext(VideoContext)
}
