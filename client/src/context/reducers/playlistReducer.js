import { PLAYLIST, PLAYLISTS } from '../actionTypes'

export const initialState = {
	playlists: [],
	loading: true,
	error: '',
}

export default function PlaylistReducer(state, action) {
	switch (action.type) {
		case PLAYLISTS.FETCHING_PLAYLISTS:
			return {
				...state,
				loading: action.payload.loading,
			}
		case PLAYLISTS.FETCHING_PLAYLISTS_SUCCESS:
			console.log('ACTION>PAYLOAD', action.payload)
			return {
				...state,
				loading: false,
				playlists: action.payload.playlists,
			}
		case PLAYLISTS.FETCHING_PLAYLISTS_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			}
		case PLAYLIST.FETCHING_PLAYLIST:
			return {
				...state,
				loading: true,
			}
		case PLAYLIST.FETCHING_PLAYLIST_SUCCESS:
			return {
				...state,
				loading: false,
				playlists: state.playlists.map((playlist) => {
					console.log(action.payload.playlist.videos)
					if (playlist._id === action.payload.playlist._id) {
						return {
							...playlist,
							videos: action.payload.playlist.videos,
						}
					} else {
						return playlist
					}
				}),
			}
		case PLAYLIST.FETCHING_PLAYLIST_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			}
		default:
			return { ...state }
	}
}
