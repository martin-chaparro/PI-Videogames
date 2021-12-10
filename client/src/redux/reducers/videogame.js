import {types} from '../types/videogame'

const initialState = {
	videogame: null,
};

export const videogameReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.videogameLoaded:
            return {
                ...state,
                videogame:action.payload
            }

		default:
			return state;
	}
};
