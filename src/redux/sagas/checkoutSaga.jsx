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
        console.log('error in checkout POST:', error)
    }
}

function* fetchHistory(action) {
    try {
        yield console.log('in checkoutSaga, grabbing history');
        let fetchResponse = yield axios.get('/api/checkout');

        console.log('fetchHistory response: ', fetchResponse.data);
        
        yield put({
            type: 'SET_HISTORY',
            payload: fetchResponse.data
        })
        

    } catch (error) {
        console.log('error in history GET:', error)
    }
}

function* checkoutSaga() {
    yield takeLatest('CHECKOUT_FULL_CART', checkoutFullCart)
    yield takeLatest('FETCH_TRANSACTION_HISTORY', fetchHistory)
}

export default checkoutSaga;