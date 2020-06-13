import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

let composeEnhancers = compose;
if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const loogerAndThunkMiddleWare = [
    thunk,
    logger
]

const initialState = {};

const middleWare = [
    applyMiddleware(...loogerAndThunkMiddleWare)
];


const store = () => {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(...middleWare)
    );
}

export default store;