import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import { normalizedComments } from '../fixtures'
import randomId from '../middlewares/randomId'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

const logger = createLogger();

const enhancer = compose(
    applyMiddleware(thunk, randomId, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, {}, enhancer)

window.store = store

export default store