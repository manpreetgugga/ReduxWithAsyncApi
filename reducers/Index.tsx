import { configureStore,combineReducers, applyMiddleware, createStore, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import reducer from './userReducer'

let store = configureStore({
    reducer: combineReducers({reducer})
  })

export default store;