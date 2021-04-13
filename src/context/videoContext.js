import { createContext, useReducer } from 'react'
import videoReducer, { initialState } from './reducers/videoReducer'

const VideoContext = createContext()

export const VideoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(videoReducer, initialState)

	return <VideoContext.Provider value={{ state, dispatch }}>{children}</VideoContext.Provider>
}
