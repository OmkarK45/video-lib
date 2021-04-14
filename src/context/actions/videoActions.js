const { VIDEO } = require('../actionTypes')

// Note to self loading is boolean
export const fetchingVideos = (loading) => ({
	type: VIDEO.FETCHING_VIDEOS,
	payload: {
		loading,
	},
})

// Note to self -> data is array
export const fetchVideosSuccess = (data) => ({
	type: VIDEO.FETCH_VIDEOS_SUCCESS,
	payload: {
		videos: data,
	},
})

// Error is a string
export const fetchVideosFail = (error) => ({
	type: VIDEO.FETCH_VIDEOS_FAIL,
	payload: {
		error,
	},
})
