import * as types from './actionTypes';

export const initGame = () => ({
    type: types.INIT_GAME
});

export const evaluateGuess = () => ({
    type: types.EVAL_GUESS
});

export const win = () => ({
    type: types.WIN
});

export const tooHigh = () => ({
    type: types.TOO_HIGH
});

export const tooLow = () => ({
    type: types.TOO_LOW
});