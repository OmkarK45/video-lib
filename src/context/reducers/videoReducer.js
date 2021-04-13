import { VIDEO } from '../actionTypes'

export const initialState = {
	videos: [],
}

export default function videoReducer(state, action) {
	switch (action.type) {
		case VIDEO.FETCH_VIDEOS:
			return {
				...state,
				videos: action.payload.videos,
			}
		default:
			return { ...state }
	}
}
