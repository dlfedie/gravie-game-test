import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './redux/reducers'; 
import rootSaga from './redux/sagas';

import App from './components/App/App';



const sagaMiddleware = createSagaMiddleware();

// logger will only be added if you're in development mode
const middlewareList = process.env.NODE_ENV === 'development' ?
    [sagaMiddleware, logger] :
    [sagaMiddleware];

const store = createStore(
    // tells the saga middleware to use the rootReducer
    // rootReducer contains all of our reducers
    rootReducer,
    // adds all middleware to our project including saga and logger
    applyMiddleware(...middlewareList),
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our sagas
sagaMiddleware.run(rootSaga);

// wrap the app in the Provider so we have access to our redux store
// this ultimately points to the index.html file. Hooray React!
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);