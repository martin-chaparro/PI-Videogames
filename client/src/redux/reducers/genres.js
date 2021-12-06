import { types } from '../types/genres';

const initialState = {
	genres: [],
};

export const genresReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.genresLoaded:
			return {
				...state,
				genres: action.payload,
			};

		default:
			return state;
	}
};
