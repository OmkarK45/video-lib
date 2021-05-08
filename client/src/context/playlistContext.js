import { createContext, useContext, useReducer } from 'react'
import PlaylistReducer, { initialState } from './reducers/playlistReducer'

const PlaylistContext = createContext()

export function PlaylistProvider({ children }) {
	const [state, dispatch] = useReducer(PlaylistReducer, initialState)
	return (
		<PlaylistContext.Provider value={{ playlistState: state, playlistDispatch: dispatch }}>
			{children}
		</PlaylistContext.Provider>
	)
}

export function usePlaylist() {
	return useContext(PlaylistContext)
}
