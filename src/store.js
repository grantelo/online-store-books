import {createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default() => { 
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
    return store;
}

