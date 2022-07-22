import {createStore,applyMiddleware} from 'redux';
import stores from './reduxs/stores'
import thunk from 'redux-thunk'
export default createStore(stores,applyMiddleware(thunk))