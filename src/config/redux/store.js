import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer/movie'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk, logger))
export default store