import { combineReducers } from 'redux';


const checkoutReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_GAME':
            let id = action.payload.gameID;
            let newState = [];
            for (let i = 0; i < state.length; i++) {
                if (state[i].id !== id) {
                    newState.push(state[i]);
                }
            }
            return newState;
        case 'RESET_CART':
            return [];
        default:
            return state;
    }
};

// technically this should probably be a separate reducer, hey, let's just use that combineReducers
const historyReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HISTORY':
            return action.payload;
        default:
            return state;
    }
}


export default combineReducers({
    checkoutReducer, historyReducer
});
