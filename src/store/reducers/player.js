
const initialState = {
    guessedNumber: 0,
    history: []
}

const player = (state = initialState, action) => {

    console.log(action);

    if(action.type === 'GUESS') {
        return {
            ...state,
            guessedNumber: action.guessedNumber,
            history: state.history.concat({guessedNumber: action.guessedNumber})
        }
    }

    return state;
}

export default player;