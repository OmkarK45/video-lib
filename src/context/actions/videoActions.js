const { VIDEO } = require('../actionTypes')

/*
    data is array of videos (objects)
*/
export const fetchVideos = (data) => ({
	type: VIDEO.FETCH_VIDEOS,
	payload: data,
})

export const fetchVideosFail = (error) => ({
	type: VIDEO.FETCH_VIDEOS_FAIL,
	payload: error,
})
