import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import middleware from './middleware';

const store = createStore(combineReducers(reducers), undefined, applyMiddleware(...middleware));

export default store;
