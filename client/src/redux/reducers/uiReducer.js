import { uiTypes } from '../types/uiTypes';

const initialState = {};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case uiTypes.uiOpenModal:
			return {
				...state
			};
		

		default:
			return state;
	}
};