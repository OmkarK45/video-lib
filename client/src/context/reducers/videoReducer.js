import { VIDEO } from '../actionTypes'

export const initialState = {
	videos: [],
	loading: true,
}

export default function videoReducer(state, action) {
	switch (action.type) {
		case VIDEO.FETCHING_VIDEOS:
			return {
				...state,
				loading: action.payload.loading,
			}
		case VIDEO.FETCH_VIDEOS_SUCCESS:
			return {
				...state,
				loading: false,
				videos: action.payload.videos,
			}
		case VIDEO.FETCH_VIDEOS_FAIL:
			return {
				...state,
				error: action.payload.error,
			}
		default:
			return { ...state }
	}
}
