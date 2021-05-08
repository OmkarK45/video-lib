import { PLAYLISTS } from '../actionTypes'

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
		default:
			return { ...state }
	}
}
