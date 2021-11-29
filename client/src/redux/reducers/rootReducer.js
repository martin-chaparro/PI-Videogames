import { combineReducers } from 'redux';

import {videogamesReducer} from './videogames'


export const rootReducer = combineReducers({
    videogames: videogamesReducer
});
