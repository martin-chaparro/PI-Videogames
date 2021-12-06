import { combineReducers } from 'redux';

import { platformsReducer } from './platforms';
import { videogamesReducer } from './videogames';
import {videogameReducer} from './videogame'
import { genresReducer } from './genres';
import { uiReducer } from './ui';

export const rootReducer = combineReducers({
	videogames: videogamesReducer,
	videogame: videogameReducer,
	platforms: platformsReducer,
	genres:genresReducer,
	ui:uiReducer
});
