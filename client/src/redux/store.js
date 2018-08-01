import { createStore, applyMiddleware } from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export default createStore(reducer, composeEnhancers(
	applyMiddleware(logger, thunk)
))