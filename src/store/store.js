import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import allMiddleware from './middleware';
import allReducers from './reducers';

const reducer = combineReducers(allReducers);
const store = createStore(reducer);

export default store;
