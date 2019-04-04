import { createLogic } from 'redux-logic';
import * as types from '../actions/actionTypes';

const validatePlayerNumber = createLogic({
    type: types.GUESS,
    validate({ getState, action }, allow, reject) {
        const isNumber = !isNaN(action.payload);
        if (isNumber) {
            allow(action);
        } else {
            reject({ type: types.NAN, payload: action.payload, error: true });
        }
    }
});

const guess = createLogic({
    type: types.GUESS,
    transform({ getState, action }, next) {
        const guessedNumber = Number(action.payload);
        next({
            ...action,
            guessedNumber: guessedNumber
        });
    },
    process({ getState, action }, dispatch, done) {
        dispatch({ type: types.EVAL_GUESS });
        done();
    }
});


export default [
    validatePlayerNumber,
    guess
];