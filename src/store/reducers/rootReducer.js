import { combineReducers } from 'redux';
import player from './player';
import ai from './ai';

export default combineReducers({
    player,
    ai
});