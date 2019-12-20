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
        default:
            return state;
    }
};


export default combineReducers({
    checkoutReducer,
});
