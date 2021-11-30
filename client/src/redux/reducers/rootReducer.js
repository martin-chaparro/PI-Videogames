import { combineReducers } from 'redux';
import { platformsReducer } from './platforms';


import {videogamesReducer} from './videogames'


export const rootReducer = combineReducers({
    videogames: videogamesReducer,
    platforms: platformsReducer
});
