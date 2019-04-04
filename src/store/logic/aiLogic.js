import { createLogic } from 'redux-logic';
import * as types from '../actions/actionTypes';

const initGame = createLogic({
    type: types.INIT_GAME,
    transform({ getState, action }, next) {
        const randomNumber = Math.floor((Math.random() * 1000) + 1);

        next({
            ...action,
            correctNumber: randomNumber
        });
    }
});

const evaluateGuess = createLogic({
    type: types.EVAL_GUESS,
    process({ getState, action }, dispatch, done) {
        const currentGuess = getState().player.guessedNumber;
        const correctNumber = getState().ai.correctNumber;

        if(currentGuess === correctNumber) {
            dispatch({ type: types.WIN });
        } else if (currentGuess > correctNumber) {
            dispatch({ type: types.TOO_HIGH });
        } else if (currentGuess < correctNumber) {
            dispatch({ type: types.TOO_LOW });
        }

        done();
    }
});


export default [
    initGame,
    evaluateGuess
];