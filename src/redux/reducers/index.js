import { combineReducers } from 'redux';
import addCardReducer from './addCardReducer';

const rootReducer = combineReducers({ addCardReducer })

export default rootReducer;