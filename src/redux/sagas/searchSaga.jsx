import axios from 'axios';

import { put, takeLatest } from 'redux-saga/effects';

function* searchForGames(action) {
    try {
        yield console.log('in searchSaga, yay!');
        let searchResponse = yield axios.post('/api/search', action.payload);
        console.log('searchForGames response', searchResponse);
        // full search data that we care about is at data.results, so just send that!
        yield put({
            type: 'SET_SEARCH_RESULTS',
            payload: searchResponse.data.results
        })

    } catch (error) {
        console.log('error in search GET:', error)
    }
}

function* searchSaga() {
    yield takeLatest('SEARCH_FOR_GAME', searchForGames)
}

export default searchSaga;