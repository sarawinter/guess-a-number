
const initialState = {
    correctNumber: 0,
    gameHasStarted: false,
    gameIsWon: false,
    message: ''
}

const ai = (state = initialState, action) => {

    if(action.type === 'INIT_GAME') {
        return {
            ...state,
            correctNumber: action.correctNumber,
            gameHasStarted: true
        }
    }

    if(action.type === 'NAN') {
        return {
            ...state,
            message: 'That is not a number! :('
        }
    }

    if(action.type === 'WIN') {
        return {
            ...state,
            gameIsWon: true,
            message: 'That is the correct number! :D'
        }
    }

    if(action.type === 'TOO_HIGH') {
        return {
            ...state,
            message: 'That number is too high.'
        }
    }

    if(action.type === 'TOO_LOW') {
        return {
            ...state,
            message: 'That number is too low.'
        }
    }

    return state;
}

export default ai;