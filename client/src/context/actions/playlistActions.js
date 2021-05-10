import { PLAYLIST, PLAYLISTS } from '../actionTypes'
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

// For single playlist
export const fetchingPlaylist = (loading) => ({
	type: PLAYLIST.FETCHING_PLAYLIST,
	payload: {
		loading,
	},
})

export const fetchPlaylistSuccess = (playlist) => ({
	type: PLAYLIST.FETCHING_PLAYLIST_SUCCESS,
	payload: {
		playlist,
	},
})

export const fetchPlaylistFail = (error) => ({
	type: PLAYLIST.FETCHING_PLAYLIST_FAIL,
	payload: {
		error,
	},
})
