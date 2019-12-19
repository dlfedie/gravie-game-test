import { combineReducers } from 'redux';


const checkoutReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        default:
            return state;
    }
};


export default combineReducers({
    checkoutReducer,
});
