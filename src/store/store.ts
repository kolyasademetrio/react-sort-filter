import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore((state = [], action) => state, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
