import { combineReducers } from 'redux';

import { platformsReducer } from './platforms';
import { videogamesReducer } from './videogames';
import {videogameReducer} from './videogame'

export const rootReducer = combineReducers({
	videogames: videogamesReducer,
	platforms: platformsReducer,
	videogame: videogameReducer,
});
