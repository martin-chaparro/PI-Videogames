import { types } from '../types/videogames';

const initialState = {
	videogames: [],
	genres:[]
};

export const videogamesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.videogameLoaded:
			return {
				...state,
				videogames: action.payload,
			};
		case types.genresLoaded:
			return {
				...state,
				genres: action.payload
			}
		case types.videogameSearchLoaded:
			return{
				...state,
				videogames: action.payload
			}
		
		default:
			return state;
	}
};
