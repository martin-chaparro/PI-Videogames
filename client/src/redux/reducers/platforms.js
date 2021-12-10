import { types } from '../types/platforms';

const initialState = {
	platforms: [],
};

export const platformsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.platformsLoaded:
			return {
				...state,
                platforms: action.payload
			};

		default:
			return state;
	}
};
