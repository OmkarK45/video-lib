import { PLAYLISTS } from '../actionTypes'
// Note to self loading is boolean
export const fetchingPlaylists = (loading) => ({
	type: PLAYLISTS.FETCHING_PLAYLISTS,
	payload: {
		loading,
	},
})

// Note to self -> data is array
export const fetchPlaylistsSuccess = (data) => ({
	type: PLAYLISTS.FETCHING_PLAYLISTS_SUCCESS,
	payload: {
		playlists: data,
	},
})

// Error is a string
export const fetchPlaylistsFail = (error) => ({
	type: PLAYLISTS.FETCHING_PLAYLISTS_FAIL,
	payload: {
		error,
	},
})
