import { combineReducers } from 'redux';
import UserReducer from './user.js';

const reducers = combineReducers({
   userReducer: UserReducer
});

export default reducers;