import * as types from './actionTypes';

export const guess = (number) => ({
    type: types.GUESS,
    payload: number
});
