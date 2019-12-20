import axios from 'axios';

import { put, takeLatest } from 'redux-saga/effects';


function* checkoutFullCart(action) {
    try {
        yield console.log('in checkoutSaga');
        yield axios.post('/api/checkout', action.payload);
        
        // then reset search
        yield put({
            type: 'RESET_SEARCH_RESULTS'
        });
        // and reset cart
        yield put({
            type: 'RESET_CART'
        })

    } catch (error) {
        console.log('error in search GET:', error)
    }
}

function* checkoutSaga() {
    yield takeLatest('CHECKOUT_FULL_CART', checkoutFullCart)
}

export default checkoutSaga;